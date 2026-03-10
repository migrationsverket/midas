import{r as m,f as l,j as t}from"./iframe-ChqJc2cw.js";import{S as d}from"./SearchField-Dt8vurCs.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BiJ7XmRL.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CR2AzEon.js";import"./utils-C3PzQQRY.js";import"./useLocalizedStringFormatter-u3-jiggt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BFRCr59d.js";import"./useFocusRing-Br7CSdIA.js";import"./index-XHTXcyLl.js";import"./index-BSxnvZZM.js";import"./useFormValidation-BaYQI757.js";import"./useField-BNA68SbK.js";import"./Button-BeubRGKE.js";import"./Hidden-CXc9jxUl.js";import"./useLabels-rs-x4V9J.js";import"./useButton-Cp-BrBn5.js";import"./search-D3i3ji1n.js";import"./createLucideIcon-CuCvvgqY.js";import"./ClearButton-BCWY8MFQ.js";import"./Button-DLoG7seu.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-DWAuUJ7k.js";import"./VisuallyHidden-BU1LBnPa.js";import"./x-Qc81h6kE.js";import"./FieldError-neuSuNaT.js";import"./Text-ByZunG-k.js";import"./Text-cWcAPzwL.js";import"./RSPContexts-Csr63BXU.js";import"./Collection-CAfIo82p.js";import"./index-BfgufJ02.js";import"./DragAndDrop-CNJsyl9v.js";import"./getScrollParent-CoX3TnbC.js";import"./scrollIntoView-DeODYBWe.js";import"./SelectionIndicator-DLEE3MHH.js";import"./SelectionManager-BSERiJGD.js";import"./useEvent-CDez9Lha.js";import"./useDescription-rnynDtnq.js";import"./inertValue-BL8CuYcp.js";import"./useHighlightSelectionDescription-C1nBZn9L.js";import"./useUpdateEffect-dtb58hou.js";import"./ListKeyboardDelegate-DTsPBH1x.js";import"./useHasTabbableChild-BYCH9fni.js";import"./Checkbox-DPFoKtVf.js";import"./Form-DzCQHYD8.js";import"./check-UEbYmNwq.js";import"./useToggleState-Du67Fqb4.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: function SimpleSearchComponent() {
    const columns: ColumnType[] = [{
      name: 'Frukt',
      id: 'fruit',
      isRowHeader: true
    }, {
      name: 'Beskrivning',
      id: 'description'
    }];
    const [searchTerm, setSearchTerm] = useState('');
    const [mockData] = useState<DataRow[]>(() => fruit.map((item, index) => ({
      id: index + 1,
      fruit: item.name,
      description: item.description
    })));
    const filteredData = mockData.filter(item => item.fruit.toLowerCase().includes(searchTerm.toLowerCase()));
    return <div style={{
      maxWidth: '400px',
      margin: '0 auto'
    }}>
        <SearchField placeholder='Sök efter en frukt...' buttonText='Sök' onSubmit={setSearchTerm} style={{
        width: '100%'
      }} />

        {searchTerm.length > 0 && (filteredData.length === 0 ? <p style={{
        marginTop: '10px'
      }}>Inga träffar</p> : <div style={{
        marginTop: '20px'
      }}>
              <Table aria-label='Fruit Table' style={{
          width: '100%'
        }}>
                <TableHeader>
                  {columns.map(column => <Column key={column.id} isRowHeader={column.isRowHeader ?? false}>
                      {column.name}
                    </Column>)}
                </TableHeader>
                <TableBody>
                  {filteredData.map(item => <Row key={item.id}>
                      {columns.map(column => <Cell key={column.id}>{item[column.id]}</Cell>)}
                    </Row>)}
                </TableBody>
              </Table>
            </div>)}
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const Te=["SimpleSearch"];export{i as SimpleSearch,Te as __namedExportsOrder,xe as default};
