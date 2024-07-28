import {Banner} from '@/components/Banner/Banner';
import {Promotion} from '@/components/Promotion/Promotion';
import {Card, Text} from '@gravity-ui/uikit';
import css from './styles.module.scss';

export default function Loans() {
    return (
        <div>
            <div className={css.Loans__content}>
                <Banner />
                <div className={'base-block'}>
                    <Card
                        view="raised"
                        type="container"
                        size="l"
                        style={{
                            maxWidth: 1100,
                        }}
                    >
                        <div className={'base-card'}>
                            <Text variant="display-2" color="brand" className="main-title">
                                Срубы ручной рубки с доставкой и сборкой
                            </Text>
                            <Text variant="body-3" color="dark-complementary" className="base-desc">
                                Наша компания уже более 20 лет работает для вас. Индивидуальный
                                подход к каждому проекту позволит вам получить действительно
                                качественный сруб. В нашей работе мы используем отборный строевой
                                лес, объем которого ограничен, но мы получаем прямые квоты на добычу
                                и выбор делянок. Бесплатная доставка и сборка рубленных домов и бань
                                производится в Москве и области, Санкт-Петербурге и области,
                                Калужской, Тульской, Смоленской, Тверской, Псковской и Брянской
                                областях. Доставка в другие регионы РФ и республику Белоруссию
                                согласуются отдельно.
                            </Text>
                        </div>
                    </Card>
                </div>
                <Promotion />
                <div className={'base-block'}>
                    <Card
                        view="raised"
                        type="container"
                        size="l"
                        style={{
                            maxWidth: 1100,
                        }}
                    >
                        <div className={'base-card'}>
                            <Text variant="display-2" color="brand" className="main-title">
                                Строительство срубов бань и домов в кредит
                            </Text>

                            <Text variant="body-3" color="dark-complementary" className="base-desc">
                                Ипотека «Строительство дома на имеющемся земельном участке» (далее
                                Ипотека) — это кредит на строительство дома под залог земельного
                                участка (ЗУ) по государственным ипотечным программам.
                            </Text>

                            <Text variant="header-1" color="dark-primary" className="base-desc">
                                Преимущества продукта:
                            </Text>

                            <Text variant="body-3" color="dark-complementary" className="base-desc">
                                <ul>
                                    <li>
                                        До 12 000 000 ₽ (Москва, Московская обл., Санкт-Петербург и
                                        Ленинградская обл.)
                                    </li>
                                    <li>
                                        До 6 000 000 ₽ (остальные регионы РФ, где имеются отделения
                                        Банка)
                                    </li>
                                    <li>Срок кредита до 30 лет</li>
                                    <li>6% ставка по Семейной ипотеке</li>
                                    <li>От 8% ставка по Льготной ипотеке</li>
                                    <li>
                                        Высокая вероятность одобрения благодаря наличию залога и
                                        подтверждению дохода через Госуслуги
                                    </li>
                                    <li>
                                        Не нужны поручители и дополнительное обеспечение по кредиту
                                    </li>
                                    <li>
                                        Экономия времени – электронная регистрация через Smart
                                        Deal/M2
                                    </li>
                                </ul>
                            </Text>

                            <Text variant="header-1" color="dark-primary" className="base-desc">
                                Требования к заёмщику:
                            </Text>

                            <Text variant="body-3" color="dark-complementary" className="base-desc">
                                <ul>
                                    <li>
                                        Граждане РФ с 18 лет (не более 70 лет на дату окончания
                                        кредитного договора)
                                    </li>
                                    <li>
                                        Постоянная регистрация в любом регионе РФ (присутствия
                                        Банка)
                                    </li>
                                    <li>
                                        Отсутствуют активные просрочки по имеющимся кредитным
                                        договорам
                                    </li>
                                    <li>Наличие мобильного телефона</li>
                                    <li>Наличие домашнего или контактного телефона</li>
                                    <li>Рабочий телефон (для работающих Заемщиков)</li>
                                    <li>Номера указанных телефонов не должны совпадать</li>
                                </ul>
                            </Text>

                            <Text variant="header-1" color="dark-primary" className="base-desc">
                                Для подачи заявки:
                            </Text>

                            <Text variant="body-3" color="dark-complementary" className="base-desc">
                                <ul>
                                    <li>Паспорт Гражданина РФ</li>
                                    <li>Номер СНИЛС</li>
                                    <li>Подтверждение дохода</li>
                                    <li>
                                        Для пенсионеров, которые не получают пенсию на счет в Почта
                                        Банке – Пенсионное удостоверение/Справка из ПФР об
                                        установлении пенсии
                                    </li>
                                </ul>
                            </Text>

                            <Text variant="header-1" color="dark-primary" className="base-desc">
                                После получения положительного решения по заявке:
                            </Text>

                            <Text variant="body-3" color="dark-complementary" className="base-desc">
                                <ul>
                                    <li>
                                        Выписка ЕГРН на ЗУ и иные документы, подтверждающие право
                                        собственника на распоряжение ЗУ (при необходимости)
                                    </li>
                                    <li>Отчет об оценке ЗУ</li>
                                    <li>Договор подряда с Застройщиком</li>
                                </ul>
                            </Text>
                        </div>
                    </Card>
                </div>

                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary" className="main-title">
                                Преимущества оформления кредита в компании «Русский Cруб»
                            </Text>
                            <Text variant="body-3" color="dark-complementary" className="base-desc">
                                Вы можете приобрести в ипотеку любой сруб стоимостью от 500 000
                                рублей. При этом, вы получаете сруб наилучшего качества из
                                прекрасного калиброванного леса. Для того, чтобы оформить ипотечное
                                кредитование на строительство обратитесь к нам и мы поможем со всеми
                                документами.
                            </Text>
                            <Text variant="header-1" color="dark-primary" className="base-desc">
                                Преимущества продукта:
                            </Text>

                            <Text variant="body-3" color="dark-complementary" className="base-desc">
                                <ul>
                                    <li>ЗУ находиться в регионе РФ, где у Банка есть отделения</li>
                                    <li>
                                        ЗУ принадлежит Заемщику или его супругу или супруге на праве
                                        собственности
                                    </li>
                                    <li>Размер земельного участка – от 4 до 40 соток</li>
                                    <li>
                                        Категория ЗУ земли населенных пунктов или поселений,
                                        сельскохозяйственного назначения
                                    </li>
                                    <li>
                                        На ЗУ нет обременений и арестов (ипотека, арест, аренда и
                                        пр.)
                                    </li>
                                    <li>
                                        На ЗУ могут быть некапитальные сооружения (хозблок, гараж,
                                        баня) и строящийся жилой дом, который не стоит на
                                        кадастровом учете и не зарегистрирован как объект
                                        незавершенного строительства
                                    </li>
                                    <li>
                                        В свободном доступе подъездная дорога для круглогодичного
                                        подъезда к земельному участку
                                    </li>
                                </ul>
                            </Text>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
