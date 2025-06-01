import { getContacts, getContact } from "@/lib/contact";

export default async function ListPage() {
  const contacts  = await getContacts();
  const firstContact = await getContact("1");
  return (
    <div>
      複数
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}
          </li>
        ))}
      </ul>
      1件
      <div>{firstContact ? firstContact?.name : '登録されていません'}</div>
    </div>
  )
}
