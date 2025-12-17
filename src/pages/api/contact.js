export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body;

  console.log("New enquiry:", { name, email, phone, message });

  // TODO: later we will:
  // 1) Send an email to you
  // 2) Save this enquiry into a database

  return res.status(200).json({ message: "Enquiry received" });
}
