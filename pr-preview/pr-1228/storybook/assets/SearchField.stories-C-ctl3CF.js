import{r as m,f as l,j as t}from"./iframe-DChMXCrL.js";import{S as d}from"./SearchField-DtTMQWhQ.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-X4SNg8oE.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BplLbAcs.js";import"./clsx-B-dksMZM.js";import"./Form-BAd9hYMN.js";import"./useFocusRing-BpLKk3JS.js";import"./index-BtCGvG5N.js";import"./index-Q46JL2nn.js";import"./Input-ZbbcuS7K.js";import"./Hidden-H9l0LVv0.js";import"./Button-MapMtsGv.js";import"./useLabel-CG1tGj69.js";import"./useLabels-4tTwJsFS.js";import"./useButton-yAWY8-j7.js";import"./FieldError-BY3Emi0e.js";import"./Text-TXgPlLZT.js";import"./clsx-Ciqy0D92.js";import"./Text-CYuY9x3r.js";import"./RSPContexts-uXDlDre3.js";import"./Group-gGcgkmgi.js";import"./useControlledState-ovwSt6hg.js";import"./useLocalizedStringFormatter-CHUWFnrm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-E2JLN3xF.js";import"./useField-Cu7NXcUO.js";import"./TextField.module-DdivwlC8.js";import"./search-FYZSOBvH.js";import"./createLucideIcon-DiQgCGzM.js";import"./x-DKchXy5q.js";import"./useLocalizedStringFormatter-t-oeGUHJ.js";import"./Button-5OLTPx-2.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-O06opA_U.js";import"./Collection-BU_lyoK4.js";import"./index-D-b3Of-R.js";import"./DragAndDrop-DGHeS-Eu.js";import"./getScrollParent-Cuy0Pyiw.js";import"./scrollIntoView-qDeDHRgD.js";import"./SelectionIndicator-ojDmiLhu.js";import"./SelectionManager-DkBkh9eR.js";import"./useEvent-KX6gLrPs.js";import"./useDescription-DzqttwPD.js";import"./inertValue-vQGhbSQr.js";import"./useHighlightSelectionDescription-LMrGaF1A.js";import"./useUpdateEffect-DNEahLDn.js";import"./ListKeyboardDelegate-bS7E8K2Y.js";import"./useHasTabbableChild-DnvwpbCp.js";import"./Checkbox-D2tockjG.js";import"./check-BIP8ya1n.js";import"./useToggleState-BBv4Wlgc.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Se=["SimpleSearch"];export{i as SimpleSearch,Se as __namedExportsOrder,Te as default};
