import React from 'react';
import { createBook, getOptions } from '../../firebase/firebase';

class CreateBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      authorOptions: [],
      description: '',
      tags: '',
      tagsOptions: [],
      audiobook: '',
      audio: '',
      kindle: '',
      paperback: '',
      featured: false,
      coverFile: '',
      seriesOptions: [],
      series: '',
      seriesNumber: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    async function getData(_this) {
      const seriesOptionsResults = await getOptions('series.name');
      const authorOptionsResults = await getOptions('author');
      const tagsOptionsResults = await getOptions('tags');
      _this.setState({
        seriesOptions: seriesOptionsResults,
        authorOptions: authorOptionsResults,
        tagsOptions: tagsOptionsResults,
      });
    }
    getData(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleDisplayPicChange = (e) => {
    this.setState({ coverFile: e.target.files[0] });
  };

  handleSubmit(e) {
    e.preventDefault();
    createBook({ ...this.state });
  }

  render() {
    return (
      <div className="create-page-container">
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label>
            title:
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
          <label>
            author:
            <input
              type="text"
              name="author"
              list="authorOptions"
              value={this.state.author}
              onChange={this.handleChange}
            />
            <datalist id="authorOptions">
              {this.state.authorOptions.length > 0
                ? this.state.authorOptions.map((option, index) => {
                    return (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    );
                  })
                : null}
            </datalist>
          </label>
          <label>
            series:
            <input
              type="text"
              name="series"
              list="seriesOptions"
              value={this.state.series}
              onChange={this.handleChange}
            />
            <datalist id="seriesOptions">
              {this.state.seriesOptions.length > 0
                ? this.state.seriesOptions.map((option, index) => {
                    return (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    );
                  })
                : null}
            </datalist>
          </label>
          {this.state.series.length > 0 ? (
            <label>
              Number in the series:
              <input
                type="number"
                name="seriesNumber"
                value={this.state.seriesNumber}
                onChange={this.handleChange}
              />
            </label>
          ) : null}
          <label>
            description:
            <textarea
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              rows="10"
            />
          </label>
          <label>
            tags (comma seperated):
            <input
              type="text"
              name="tags"
              list="tagsOptions"
              value={this.state.tags}
              onChange={this.handleChange}
            />
            <datalist id="tagsOptions">
              {this.state.tagsOptions.length > 0
                ? this.state.tagsOptions.map((option, index) => {
                    return (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    );
                  })
                : null}
            </datalist>
          </label>
          <label>
            audiobook:
            <input
              type="text"
              name="audiobook"
              value={this.state.audiobook}
              onChange={this.handleChange}
            />
          </label>
          <label>
            audio:
            <input
              type="text"
              name="audio"
              value={this.state.audio}
              onChange={this.handleChange}
            />
          </label>
          <label>
            kindle
            <input
              type="text"
              name="kindle"
              value={this.state.kindle}
              onChange={this.handleChange}
            />
          </label>
          <label>
            paperback:
            <input
              type="text"
              name="paperback"
              value={this.state.paperback}
              onChange={this.handleChange}
            />
          </label>
          <label>
            featured
            <input
              type="checkbox"
              name="featured"
              value={this.state.featured}
              onChange={this.handleChange}
            />
          </label>
          <label>
            cover photo:
            <input
              type="file"
              name="coverFile"
              onChange={this.handleDisplayPicChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateBook;
