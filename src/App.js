import React, { Component } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Bar, Line, Pie, HorizontalBar, Polar } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      csat: {
        labels: [
          "Dúvidas - 93%",
          "N2 - 100%",
          "N3 - 100%",
          "Trial - 100%",
          "Freemium - 100%",
        ],
        datasets: [
          {
            label: "%",
            data: [93, 100, 100, 100, 100, 0],
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
          "Dúvidas: 28",
          "N2:  8",
          "N3: 6",
          "Trial: 3",
          "Freemium: 0",
        ],
        datasets: [
          {
            label: "Abertos",
            data: [28, 8, 6, 3, 0, 0],
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
          "Dúvidas: 27",
          "N2: 8",
          "N3: 5",
          "Trial: 3",
          "Freemium: 0",
        ],
        datasets: [
          {
            label: "Abertos",
            data: [27, 8, 5, 3, 0, 0],
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
          "Janeiro - 274",
          "Fevereiro - 45",
          "Março - 0",
          "Abril - 0",
          "Maio - 0",
          "Junho - 0",
          "Julho - 0",
          "Agosto - 0",
          "Setembro - 0",
          "Outubro - 0",
          "Novembro - 0",
          "Dezembro - 0",
        ],
        datasets: [
          {
            label: "Abertos",
            data: [274, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30],
            backgroundColor: ["#99ccff"],
          },
        ],
      },

      chatTickets: {
        labels: [
          "Chats atendidos - 43",
          "Chats resolvidos - 35",
          "Chats não resolvidos - 8",
        ],
        datasets: [
          {
            label: "Atendimento Técnico",
            data: [43, 35, 8, 0],
            backgroundColor: ["#33ccff", "#3399ff", "#6699ff"],
          },
        ],
      },

      chatTimer: {
        labels: [
          "Maior duração - 81",
          "Tempo médio de duração - 21",
          "Maior tempo em fila - 27",
          "Tempo médio em fila - 2",
        ],
        datasets: [
          {
            label: "Minutos",
            data: [81, 21, 27, 2, 0],
            backgroundColor: ["#ffcc66", "#ccff66", "#ff6600", "#66ff66"],
          },
        ],
      },

      chatQuit: {
        labels: [
          "Total de desistencias na fila - 1",
          "Sem deixar mensagem - 1",
          "Deixou mensagem - 0",
        ],
        datasets: [
          {
            label: "Desistencias",
            data: [1, 1, 0, 0],
            backgroundColor: ["#ff6600", "#ccff66", "#ffcc66", "#66ff66"],
          },
        ],
      },

      chatQuitTimer: {
        labels: [
          "Maior tempo até desistencia - 0",
          "Tempo médio para desistencia - 0",
        ],
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
      <section className="container mt-4">
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
        <div className="row">
          <div className="mt-5 col-10 shadow rounded left p-3">
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
            <h3 className="text-right">
              <b>Total: 98%</b>
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="mt-5 col-10 shadow rounded left p-3">
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
            <h3 className="text-right">
              <b>Total: 45</b>
            </h3>
          </div>
        </div>
        
        <div className="row">
          <div className="mt-5 col-10 shadow rounded p-3">
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
            <h3 className="text-right">
              <b>Total: 43</b>
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="mt-5 col-12 shadow rounded p-3">
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
        </div>

        <div className="row">
          <div className="mt-5 col-10 shadow rounded p-3s">
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
        </div>

        <div className="row">
          <div className="mt-5 col-10 shadow rounded p-3">
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
        </div>

        <div className="row">
          <div className="mt-5 col-10 shadow rounded p-3">
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
        </div>

        <div className="row">
          <div className="mt-5 col-10 shadow rounded mb-5 p-3">
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
        </div>
      </section>
    );
  }
}

export default App;
