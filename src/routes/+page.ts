
import { firestore } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

/** @type {import('./$types').PageLoad} */
export async function load() {
  const poolsDocsSnapshot = await getDocs(collection(firestore, "pools"));

  return {
    pools: poolsDocsSnapshot.docs.map(doc => ({...doc.data(), docId: doc.id}))
  }
}