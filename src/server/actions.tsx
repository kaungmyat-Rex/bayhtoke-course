"use server";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  addDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import getApp from "./firebaseConfig";
import { courseType } from "@/types/index";
import nodemailer from "nodemailer";
import getAppStorage from "./firebaseConfigStorage";

const db = await getApp();

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,

  auth: {
    user: "871c69001@smtp-brevo.com", // SMTP username
    pass: "AsazJk8PN7G5t9Yh", // SMTP password
  },
});

export const getCourses = async () => {
  const data = await getDocs(
    query(collection(db, "courses"), orderBy("date", "desc"))
  );

  const coursesData = data.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  }) as courseType[];

  return coursesData;
};

export const getCourse = async (courseId: string) => {
  const db = await getApp();
  const data = await getDoc(doc(db, "courses", courseId));
  const singleCourseData = data.data() as courseType;

  return singleCourseData;
};

export const sendEmail = async (formdata: FormData) => {
  const formData = Object.fromEntries(formdata);
  const { name, email, message } = formData;
  const senderEmail = "aungakm668@gmail.com";

  try {
    await transporter.sendMail({
      from: `"${name}" <${senderEmail}>`,
      to: "aungakm667@gmail.com", // Change to your receiving email
      subject: "New message from bayhtoke",
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return {
      status: "success",
      message: "Email successfully sent.",
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: "Email failed to send",
    };
  }
};

export const imageUpload = async (paymentImage: File) => {
  const storage = await getAppStorage();

  const imgRef = ref(
    storage,
    `billingImg/${
      paymentImage?.name
        ? paymentImage.name + Date.now()
        : `default_${Date.now()}.jpg` + Date.now()
    }`
  );

  if (paymentImage) {
    await uploadBytes(imgRef, paymentImage);
  }
  const imgUrl = await getDownloadURL(imgRef);
  return imgUrl;
};

export const createBilling = async (
  formdata: FormData,
  courseId: string,
  imageUrl: string,
  courseName: string,
  Amount: string
) => {
  const formData = Object.fromEntries(formdata);
  const { name, email, phone } = formData;
  const senderEmail = "bayhtoke2025@gmail.com";
  try {
    await addDoc(collection(db, "billings"), {
      buyerName: name,
      buyerEmail: email,
      buyerPhoneno: phone,
      courseId: courseId,
      screenshot: imageUrl,
    });
    await transporter.sendMail({
      from: `"Bayhtoke Course(ဘေထုပ်ကော့စ်)" <${senderEmail}>`,
      to: `${email}`, // Change to your receiving email
      subject: "New message from bayhtoke",
      html: ` <body
    style="
      margin: 0;
      padding: 0;
      background-color: #141b23;
      font-family: Arial, sans-serif;
    "
  > 
    <div
      style="
        max-width: 600px;
        margin: 70px auto;
        background: #141b23;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 5px rgba(232, 230, 230, 0.1);
      "
    >
      <div style="text-align: center; padding: 10px 0">
        <p style="color: #fd660e">ဘေထုပ်ကော့စ်</p>
        <h1 style="color: #fd660e">
          Order <span style="color: #cccccc">Confirmation</span>
        </h1>
      </div>
      <div style="padding: 20px; line-height: 1.6; color: #cccccc">
        <p>Dear ${name}, We received your order!</p>
        <p>Thank you for buying from <strong>BayHtoke Courses</strong>.</p>

        <p>
          Admin မှ ၂၄နာရီအတွင်း payment စစ်ဆေးပီး ဤ gmail မှ download link
          ပေးမည် ဖြစ်ပါသည်။
        </p>
        <div
          style="
            background: #141b23;
            padding: 15px;
            border-radius: 5px;
            border-style: solid;
            border-width: 1px;
            border-color: #cccccc;
          "
        >
          <p><strong>Couse Name:</strong> ${courseName}</p>
          <p><strong>Amount:</strong> ${Amount} Ks</p>
          <p><strong>Payment Method:</strong> KBZ pay</p>
        </div>
        <p>
          If you have any questions or need further assistance, feel free to
          contact us at
          <a style="color: #fd660e" href="mailto:bayhtoke2025@gmail.com"
            >[Support Email]</a
          >
          or visit our website:
          <a
            style="color: #fd660e; text-decoration: none"
            href="[Company Website]"
            >[Company Website]</a
          >.
        </p>
      </div>
    </div>
  </body>
             `,
    });
    return {
      message: "Course ဝယ်ယူချင်း အောင်မြင်ပါသည်။",
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: "Course ဝယ်ယူချင်း မအောင်မြင်ပါ",
    };
  }
};
