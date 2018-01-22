exports.decorateTab = (Tab, { React }) => {
    
    return class extends React.Component {
        constructor(props, context) {
            super(props, context)
            this.handleKeyClick = this.handleKeyClick.bind(this)
        }

        handleKeyClick(e) {
            if(e.altKey) this.props.onClose()
        }

        render() {
            const props = Object.assign({}, this.props, {
                onClick: this.handleKeyClick,
            })

            return React.createElement(Tab, props)
        }
    }
}