import UserAddress from '@/components/core/shop/profile/user-address';
import UserContact from '@/components/core/shop/profile/user-contact';
import UserProfile from '@/components/core/shop/profile/user-profile';
import axios from 'axios';

const DashboardPage = async () => {
  const { data: countries } = await axios.get(
    'https://restcountries.com/v2/all'
  );

  const session = {};

  const addresses: any[] = [];

  // console.log('addresses: ', addresses);

  return (
    <div className='flex flex-col mt-1.5'>
      <div className='flex flex-col'>
        <UserProfile session={session} />
        {/* <UserEmail /> */}
        <UserContact countries={countries} />
      </div>

      <div className='shadow bg-white flex flex-col mt-8 px-5 py-8 rounded-md'>
        <UserAddress addresses={addresses} />
      </div>
    </div>
  );
};

export default DashboardPage;
