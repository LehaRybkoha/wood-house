import {ImageSlider} from '@/components/ImageSlider/ImageSlider';
import {Card, Text} from '@gravity-ui/uikit';
import css from './styles.module.scss';

export default function CutTypes() {
    return (
        <div>
            <div className={css.CutTypes__content}>
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
                                Виды рубки деревянных срубов домов и бань
                            </Text>
                            <Text variant="body-3" color="dark-complementary" className="base-desc">
                                Строительство домов ручной рубки происходит почти по тому же
                                принципу, что и срубы из оцилиндрованного бревна. Но главное отличие
                                ручной рубки от оцилиндровки – это техника обработки самих бревен,
                                которая происходит вручную. Это очень усердная работа, которая
                                позволяет исключить всевозможные недочеты и дефекты, которые могут
                                происходить в процессе машинной обработки бревен.
                                <br />
                                <br />
                                Существует два основных вида рубки бревен при строительстве
                                деревянных бань и домов, которые существуют уже более 100 лет,
                                сохраняя свои традиции – это рубка «в чашу» и рубка «в лапу».
                            </Text>
                        </div>
                    </Card>
                </div>
                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary" className="main-title">
                                Технология рубки деревянного сруба "в чашу"
                            </Text>
                            <div>
                                <Text
                                    variant="body-3"
                                    color="dark-secondary"
                                    className="main-title"
                                    style={{
                                        marginLeft: 16,
                                    }}
                                >
                                    Рубку стен сруба «в чашу» принято считать классическим способом
                                    рубки деревянных домов и бань. Дома по этой технологии строились
                                    еще много веков назад нагими предками. Рубка «в чашу»
                                    предполагает прочное и теплое соединение бревен друг с другом.
                                    При данном типе рубки бревна выступают за пределы углов дома на
                                    30-50 см, защищая, тем самым, углы дома от воздействия погодных
                                    явлений (снег, дождь, солнце и т.д.). В качестве утеплителя чаще
                                    всего используют мох или джутовое полотно. Кроме того, рубка «в
                                    чашу» может осуществляться не только при строительстве домов из
                                    бревна, но также и из бруса. Наиболее оптимальными сечениями
                                    бруса для рубки «в чашу» являются 150х150, 150х200 и 200х200 мм.
                                    Когда заказчик планирует строить дом по технологии рубки «в
                                    чашу», он заранее не планирует отделывать свой сруб, а
                                    использовать только специальные финишные покрытия, защищающие
                                    бревна от воздействия атмосферных явлений, насекомых и грибков.
                                    В случае же, если заказчик собирается отделывать свой сруб после
                                    усадки сайдингом, кирпичом и прочими материалами, то он заранее
                                    должен подумать о том, что лучше будет использовать при
                                    строительстве технологию рубки бревен «в лапу».
                                </Text>
                                {/* <ImageSlider /> */}
                            </div>
                        </div>
                    </Card>
                </div>
                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary" className="main-title">
                                Технология рубки деревянного сруба "в лапу"
                            </Text>
                            <div>
                                <Text
                                    variant="body-3"
                                    color="dark-secondary"
                                    className="main-title"
                                    style={{
                                        marginLeft: 16,
                                    }}
                                >
                                    Технология рубки «в лапу» подразумевает укладку бревен в срубе
                                    без выпуска на углах, а внутри потесанные стены (ровные), а это,
                                    в свою очередь, значительно упрощает последующую отделку сруба.
                                    Кроме того, отсутствие выступов бревна или бруса на углах
                                    значительно увеличивает пространство вокруг дома.
                                    <br />
                                    <br />
                                    Технология рубки «в лапу» становится все более популярной в
                                    последнее время. Основным преимуществом этого метода является
                                    рубка без остатка, не уступающая при этом рубке «в чашу» по
                                    прочности. Но, так или иначе, рубка «в лапу» всегда стоит
                                    дешевле. Это очень трудоемкий процесс, требующий немалой
                                    квалификации и специальных знаний, ведь все элементы сруба при
                                    этом методе укладки бревен подгоняются очень тщательно. Но при
                                    этом, если, строить ,например, сруб бани из бруса с сечением
                                    200х200 и использовать технологию рубки углов «в лапу», то такой
                                    сруб можно с легкостью строить сразу на участке заказчика, что
                                    значительно сократит само время строительства.
                                </Text>
                                {/* <ImageSlider /> */}
                            </div>
                        </div>
                    </Card>
                </div>
                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary" className="main-title">
                                Технология рубки деревянного сруба "в получашу"
                            </Text>
                            <div>
                                <Text
                                    variant="body-3"
                                    color="dark-secondary"
                                    className="main-title"
                                    style={{
                                        marginLeft: 16,
                                    }}
                                >
                                    Существует еще один метод рубки деревянных срубов – это, так
                                    называемый, метод рубки «получашу». Эта комбинированная рубка
                                    сочетает в себе сразу обе основных технологии: и рубку «в чашу»,
                                    и рубку «в лапу». Другими словами – внутри углы сруба рубятся «в
                                    чашу», а снаружи «в лапу». Основное преимущество этого метода в
                                    том, что угол дома получается очень теплым! Если говорить о
                                    стоимости такой рубки, то она обойдется Вам чуть дешевле, чем
                                    рубка «в чашу», и немного дороже, чем рубка «в лапу».
                                    <br />
                                    <br />В нашем каталоге проектов срубов Вы можете посмотреть цены
                                    на рубку срубов по различным технологиям и выбрать тот вариант,
                                    который подойдет Вам больше всего!
                                </Text>
                                {/* <ImageSlider /> */}
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
