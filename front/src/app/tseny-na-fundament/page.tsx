import {Card, Text} from '@gravity-ui/uikit';
import css from './styles.module.scss';

export default function Foundation() {
    return (
        <div>
            <div className={css.Foundation__content}>
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
                                Фундaмент для сруба дoмов и бань
                            </Text>
                            <Text variant="body-3" color="dark-complementary" className="base-desc">
                                Стоимость дана без учёта доставки к месту проведения работ.
                                <br />
                                Стоимость обвязки брусом зависит от выбранного размера сруба и не
                                входит в цену фундамента.
                            </Text>
                        </div>
                    </Card>
                </div>
                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary" className="main-title">
                                В СТОИМОСТЬ ЛЕНТОЧНОГО ФУНДАМЕНТА ВХОДИТ:
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
                                    <ul>
                                        <li>
                                            Подготовка участка к строительству и разметка фундамента
                                        </li>
                                        <li>Выемка грунта под будущий фундамент</li>
                                        <li>Доски, брус для опалубки</li>
                                        <li>
                                            Установка опалубки, вязка арматуры и заливка фундамента
                                        </li>
                                        <li>Готовая бетонная смесь (завозится бетономешалками)</li>
                                        <li>Песок для подсыпки</li>
                                        <li>Арматура и вязальная проволока</li>
                                        <li>Гвозди, рубероид</li>
                                    </ul>
                                    Во всех остальных случаях доставка рассчитывается индивидуально.
                                </Text>
                            </div>
                            {/* <ImageSlider /> */}
                        </div>
                    </Card>
                </div>
                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary" className="main-title">
                                СТОИМОСТЬ ЛЕНТОЧНОГО ФУНДАМЕНТА
                            </Text>
                            <div className="scroll-x" style={{marginTop: 32}}>
                                <table className="table-srubi">
                                    <thead>
                                        <tr>
                                            <td>Размер ленточного фундамента</td>
                                            <td>Цена на фундамент (материал+работа)</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>4х5м.</td>
                                            <td>от 180тыс.руб.</td>
                                        </tr>
                                        <tr>
                                            <td>4х6м.</td>
                                            <td>от 190тыс.руб.</td>
                                        </tr>
                                        <tr>
                                            <td>5х6м.</td>
                                            <td>от 270 тыс.руб.</td>
                                        </tr>
                                        <tr>
                                            <td>6х6м.</td>
                                            <td>от 290 тыс.руб.</td>
                                        </tr>
                                        <tr>
                                            <td>6х8м.</td>
                                            <td>от 350 тыс.руб</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <Text
                                variant="subheader-3"
                                color="dark-secondary"
                                className="base-desc"
                            >
                                Для остальных размеров стоимость рассчитывается индивидуально.
                                <br />
                                Стоимость на фундамент рассчитывается исходя из географии местности
                                и пожеланий заказчика.
                            </Text>
                        </div>
                    </Card>
                </div>
                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary" className="main-title">
                                СТОИМОСТЬ ЛЕНТОЧНОГО ФУНДАМЕНТА
                            </Text>
                            <div className="scroll-x" style={{marginTop: 32}}>
                                <table className="table-srubi">
                                    <thead>
                                        <tr>
                                            <td colSpan={2}>
                                                Фундамент для сруба. Диаметр свай 108 мм.
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Длина сваи</td>
                                            <td>Стоимость</td>
                                        </tr>
                                        <tr>
                                            <td>2500 мм.</td>
                                            <td>от 4500 р.</td>
                                        </tr>
                                        <tr>
                                            <td>3000 мм.</td>
                                            <td>от 5500 р.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <Text
                                variant="subheader-2"
                                color="complementary"
                                className="main-title"
                                style={{marginLeft: 16}}
                            >
                                СТОИМОСТЬ УСТАНОВКИ ЖЕЛЕЗОБЕТОННЫХ СВАЙ
                            </Text>
                            <Text
                                variant="subheader-1"
                                color="dark-secondary"
                                className="base-desc"
                                style={{marginLeft: 32}}
                            >
                                Наша компания предлагает возведение фундаментов на основе
                                железобетонных свай. Данная технология успешно зарекомендовала себя
                                в различных отраслях строительства: возведение высотных зданий,
                                сооружение мостов, линий электропередач и других сложных технических
                                объектов.
                                <br />
                                <br />
                                Данная технология применяется на всех грунтах, за счет различных
                                сочетаний марок бетона и арматур. Монтаж фундамента производится
                                специализированной техникой, по предварительным расчетам наших
                                специалистов, которые детально составляют карту строительства,
                                исходя из учета выезда на местность по определению
                                геоморфологических свойств почвы, а также вашего технического
                                задания.
                                <br />
                                <br />
                                Данная технология не нуждается в проверке временем, а срок службы
                                таких фундаментов составляет более 100 лет.
                            </Text>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
