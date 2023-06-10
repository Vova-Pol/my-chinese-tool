import './Profile.css';

export const Profile = () => {
  return (
    <section className="profile">
      <img
        src="https://filed7-17.my.mail.ru/pic?url=http%3A%2F%2Floveopium.ru%2Fcontent%2F2012%2F07%2Fchinese_garden%2F904.jpg&mw=&mh=&sig=05f4e9f33092b5348836b2df80502c48"
        alt="аватар пользователя"
        className="profile__image"
      />
      <div className="profile__info">
        <h2 className="profile__user-name">Владимир Поляница</h2>
        <p className="profile__user-nickname">@Vova_Pol</p>
      </div>
    </section>
  );
};
