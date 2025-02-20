// ІМПОРТУЄМО БІБЛІОТЕКИ БЕЗ ЯКИХ НЕ МОЖЕМО ПИСАТИ КОД
import React from "react";

// ІМПОРТУЄМО ПОТРІБНІ КОМПОНЕНТИ
import Page from "./components/Page";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Menu from "./components/Menu";
import Payment from "./components/Payment";
import GetIcon from "./img/icons/get.svg";
import SendIcon from "./img/icons/send.svg";
import AnotherIcon from "./img/icons/another.svg";

// КОНФІГУРАЦІЯ ==========================================
export default function App() {
  // ФУНКЦІОНАЛ БАЛАНСУ ========================
  const START_BALANCE = 0;
  const LIMIT_BALANCE = 100000;
  const GET_MONEY = Math.floor(Math.random() * 5999) + 1;

  // Ось тут тримаємо актуальне значення балансу
  const [balance, setBalance] = React.useState(START_BALANCE);
  // Ось тут тримаємо актуальне значення cписка транзакцій
  const [transactions, addTransaction] = React.useState([]);

  // Функція для прямого поповнення балансу
  // ============================================
  const getMoney = () => {
    setBalance(balance + GET_MONEY);
    addTransaction([
      {
        name: "Поповнення",
        amount: GET_MONEY,
        type: "+",
      }, 
      ...transactions,
    ]);
  };
  // ============================================
  // ============================================
  const removeMoney = () => {
    setBalance(balance - GET_MONEY);
    addTransaction([
      {
        name: "Списання грошей",
        amount: GET_MONEY,
        type: "-",
      }, 
      ...transactions,
    ]);
  };
  // ============================================

  // Функція яка виконується кожен раз коли наш баланс змінився
  React.useEffect(() => {
    // Перевірка на ліміт балансу
    if (balance > LIMIT_BALANCE) {
      alert(`Ваш ліміт балансу: ${LIMIT_BALANCE}`);
      setBalance(START_BALANCE);
    }

    // Перевірка на мінусовий баланс
    if (balance < 0) {
      alert(`Ви використали усі свої гроші. Поповніть картку`);
      // setBalance(0);
    }
    // Сюди записуються змінні при оновленні яких буде виконуватися функція
  }, [balance]);

  // ВЕРСТКА ІНТЕРФЕЙСУ ==========================================

  // ця функція відкриває вікно в браузері з текстом
  const HelloFriends = () => alert("Hello Friends!");

  return (
    <Page>
      {/* компонент шапки з нашою назвою
          також при кліку мишкою на шапку
          в нас визивається функція HelloWorld
      */}

      <Header name="MONOBANK" onClick={HelloFriends} />

      {/* Компонент баланса в який передається
          Актуальне значення балансу  */}
      <Balance balance={balance} />

      {/* Компонент меню з кнопками */}
      <Menu
        // ось сюди ми передаємо конфігурацію кнопок
        config={[
          {
            name: "Поповнити свій баланс",
            onClick: getMoney,
            img: GetIcon,
          },
          {
            name: "Переказати на картку",
            onClick: removeMoney,
            img: SendIcon,
          },
          {
            name: "Інші платежі",
            img: AnotherIcon,
          },
        ]}
      />
      {/* компонент списка наших транзакцій */}
      <Payment payment={transactions} />
    </Page>
  );
}
