import React, { Component } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Bar, Line, Pie, HorizontalBar, Polar } from "react-chartjs-2";
import { Navbar } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      csat: {
        labels: ["Dúvidas - 95%", "N2 - 100%", "N3 - 100%", "Trial - 75%", "Freemium - NULL"],
        datasets: [
          {
            label: "%",
            data: [95, 100, 100, 75, 0, ],
            backgroundColor: [
              "#99ccff",
              "#9966ff",
              "#ffcc66",
              "#ff9966",
              "#ffcccc",
            ],
          },
        ],
      },

      ticketsAbertos: {
        labels: [
          "Dúvidas: 10",
          "N2: 2",
          "N3: 2",
          "Trial: 0",
          "Freemium: 0",
        ],
        datasets: [
          {
            label: "Abertos",
            data: [10, 2, 2, 0, 0],
            backgroundColor: [
              "#99ccff",
              "#9966ff",
              "#ffcc66",
              "#ff9966",
              "#ffcccc",
            ],
          },
        ],
      },

      ticketsFechados: {
        labels: [
          "Dúvidas: 10",
          "N2: 2",
          "N3: 0",
          "Trial: 0",
          "Freemium: 0",
        ],
        datasets: [
          {
            label: "Abertos",
            data: [10, 2, 0, 0, 0],
            backgroundColor: [
              "#99ccff",
              "#9966ff",
              "#ffcc66",
              "#ff9966",
              "#ffcccc",
            ],
          },
        ],
      },

      ticketsPorMes: {
        labels: [
          "Janeiro - 362",
          "Fevereiro - 206",
          "Março - 301",
          "Abril - 330",
          "Maio - 248",
          "Junho - 249",
          "Julho - 287",
          "Agosto - 310",
          "Setembro - 238",
          "Outubro - 289",
          "Novembro - 222",
          "Dezembro - 0",
        ],
        datasets: [
          {
            label: "Abertos",
            data: [363, 206, 301, 330, 248, 249, 287, 310, 238, 289, 267, 14],
            backgroundColor: ["#99ccff"],
          },
        ],
      },

      chatTickets: {
        labels: ["Chats atendidos - 16", "Chats resolvidos - 8", "Chats não resolvidos - 8"],
        datasets: [
          {
            label: "Atendimento Técnico",
            data: [16, 8, 8, 0],
            backgroundColor: ["#33ccff", "#3399ff", "#6699ff",],
          },
        ],
      },

      chatTimer: {
        labels: ["Maior duração - 39", "Tempo médio de duração - 19", "Maior tempo em fila - 25", "Tempo médio em fila - 5"],
        datasets: [
          {
            label: "Minutos",
            data: [39, 19, 25, 5, 0],
            backgroundColor: ["#ffcc66", "#ccff66", "#ff6600", "#66ff66"],
          },
        ],
      },

      chatQuit: {
        labels: ["Total de desistencias na fila - 0", "Sem deixar mensagem - 0", "Deixou mensagem - 0"],
        datasets: [
          {
            label: "Desistencias",
            data: [0, 0, 0, 0],
            backgroundColor: ["#ff6600", "#ccff66", "#ffcc66", "#66ff66"],
          },
        ],
      },

      chatQuitTimer: {
        labels: ["Maior tempo até desistencia - 0", "Tempo médio para desistencia - 0]"],
        datasets: [
          {
            label: "Minutos",
            data: [0, 0, 0],
            backgroundColor: ["#ff6600", "#ffcc66"],
          },
        ],
      },
    };
  }

  render() {
    return (
      <section className="container mt-2">
        <div
          className="col-6 centered"
          style={{ position: "fixed", display: "none" }}
        >
          <FormControl className="col-4 fixed-top">
            <InputLabel htmlFor="grouped-select">Mês</InputLabel>
            <Select defaultValue="" id="grouped-select">
              <MenuItem value="">
                <em>Selecione um mês</em>
              </MenuItem>
              <MenuItem value={1}>Janeiro</MenuItem>
              <MenuItem value={2}>Fevereiro</MenuItem>
              <MenuItem value={3}>Março</MenuItem>
              <MenuItem value={4}>Abril</MenuItem>
              <MenuItem value={5}>Maio</MenuItem>
              <MenuItem value={6}>Junho</MenuItem>
              <MenuItem value={7}>Julho</MenuItem>
              <MenuItem value={8}>Agosto</MenuItem>
              <MenuItem value={9}>Setembro</MenuItem>
              <MenuItem value={10}>Outubro</MenuItem>
              <MenuItem value={11}>Novembro</MenuItem>
              <MenuItem value={12}>Dezembro</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="mt-5 shadow rounded">
          <Polar
            data={this.state.csat}
            options={{
              title: {
                display: true,
                text: "CSAT",
                fontSize: 25,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
          <h3 className='text-right mr-3'><b>Total: 92%</b></h3>
        </div>

        <div className="row">
          <div className="mt-5 col-7 shadow rounded left">
            <Pie
              data={this.state.ticketsAbertos}
              options={{
                title: {
                  display: true,
                  text: "Tickets Abertos",
                  fontSize: 25,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
            <h3 className='text-right'><b>Total: 14</b></h3>
          </div>

          <div className="mt-5 col-7 shadow rounded">
            <Pie
              data={this.state.ticketsFechados}
              options={{
                title: {
                  display: true,
                  text: "Tickets Fechados",
                  fontSize: 25,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
            <h3 className='text-right'><b>Total: 12</b></h3>
          </div>
        </div>

        <div className="mt-5 shadow rounded">
          <Line
            data={this.state.ticketsPorMes}
            options={{
              title: {
                display: true,
                text: "Tickets Por Mês",
                fontSize: 25,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>

        <div className="mt-5 col-11 shadow rounded">
          <HorizontalBar
            data={this.state.chatTickets}
            options={{
              title: {
                display: true,
                text: "Chat",
                fontSize: 25,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>

        <div className="mt-5 col-11 shadow rounded">
          <HorizontalBar
            data={this.state.chatTimer}
            options={{
              title: {
                display: true,
                text: "Tempo em Chat",
                fontSize: 25,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>

        <div className="mt-5 col-11 shadow rounded">
          <HorizontalBar
            data={this.state.chatQuit}
            options={{
              title: {
                display: true,
                text: "Desistencia do Chat",
                fontSize: 25,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>

        <div className="mt-5 col-11 shadow rounded">
          <HorizontalBar
            data={this.state.chatQuitTimer}
            options={{
              title: {
                display: true,
                text: "Tempo de desistencia do Chat",
                fontSize: 25,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>
      </section>
    );
  }
}

export default App;