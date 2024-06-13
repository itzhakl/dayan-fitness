import React from 'react';

type Props = {
    onContactFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const FooterSection: React.FC<Props> = ({ onContactFormSubmit }: Props) => {
  return (
    <div className="mt-80 w-full max-w-[1212px] self-center max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-6 text-right text-sky-950 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col">
          <div className="mb-6 self-stretch text-7xl font-bold leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
            מעוניינים במידע נוסף? מלאו את הפרטים ונחזור אליכם בהקדם.
          </div>
          <form
            onSubmit={onContactFormSubmit}
            className="mt-6 flex flex-col gap-6"
          >
            <input
              type="text"
              placeholder="שם מלא"
              className="rounded-2xl border-2 border-sky-950 px-6 py-5"
            />
            <input
              type="email"
              placeholder="אימייל"
              className="rounded-2xl border-2 border-sky-950 px-6 py-5"
            />
            <textarea
              placeholder="הודעה"
              className="h-40 resize-none rounded-2xl border-2 border-sky-950 px-6 py-5"
            />
            <button
              type="submit"
              className="mt-6 self-end rounded-3xl bg-sky-950 px-8 py-4 text-zinc-50"
            >
              שלח
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
