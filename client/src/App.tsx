import PayPal from './components/PayPal';
import WhatsAppAccessComponent from './components/mainContext';

const App = () => {
  return (
    <div dir='rtl' className="max-w-svw flex flex-col min-h-svh items-center justify-center">
      {/* <Page /> */}
      {/* <Link/> */}
      {/* <WhatsAppAccessComponent/> */}
      <PayPal totalMoney='2' currencyCode='ILS'/>
    </div>
  );
};

export default App;
