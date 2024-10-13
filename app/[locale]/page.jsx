import Image from "next/image";
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function Home() {
  const t = useTranslations('home');
  return (
    <div>
      main page
    </div>
  );
}
