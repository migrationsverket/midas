import{r as m,f as l,j as t}from"./iframe-BCVsy88N.js";import{S as d}from"./SearchField-CafuMO-v.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-_b9VBkl-.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C-OmHNLm.js";import"./clsx-B-dksMZM.js";import"./Form-Dy6Ga4aj.js";import"./useFocusRing-eWhXbche.js";import"./index-BwfJQ9F8.js";import"./index-cJVZ5RXC.js";import"./Input-CMX_k8Dp.js";import"./Hidden-CN3dXu03.js";import"./Button-Kvyi1RRX.js";import"./useLabel-BbZWMYwa.js";import"./useLabels-COZKzSvp.js";import"./useButton-DfNnGNTV.js";import"./FieldError-DIexkAgJ.js";import"./Text-CJD2elUx.js";import"./clsx-Ciqy0D92.js";import"./Text-C7Bb6ebF.js";import"./RSPContexts-BeHTEqOC.js";import"./Group-DP4wot9I.js";import"./useControlledState-jD-tqQdO.js";import"./useLocalizedStringFormatter-atdiyxXD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-rssmsnsn.js";import"./useField-ClRCUqkF.js";import"./TextField.module-DdivwlC8.js";import"./search-BuHHvv_1.js";import"./createLucideIcon-D1oE0F07.js";import"./x-CDS6gFVI.js";import"./useLocalizedStringFormatter-mDxu21Fd.js";import"./Button-VV8KlKzK.js";import"./Button.module-BFenTVPP.js";import"./VisuallyHidden-D6HKc_n0.js";import"./Collection-D8dxrVCb.js";import"./index-ByIdwhbP.js";import"./DragAndDrop-CMbdu-mn.js";import"./getScrollParent-0ANyO0oI.js";import"./scrollIntoView-BpYW2Snh.js";import"./SelectionIndicator-Eo-pa4gg.js";import"./SelectionManager-DfTkzoNg.js";import"./useEvent-D0oKdA7w.js";import"./useDescription-BypmPDUq.js";import"./inertValue-CV6eY1pQ.js";import"./useHighlightSelectionDescription-EPePtPvW.js";import"./useUpdateEffect-Ct6IYVOF.js";import"./ListKeyboardDelegate-Bw34GQYt.js";import"./useHasTabbableChild-Dzi9fCzW.js";import"./Checkbox-B2IZYjZA.js";import"./check-DHU0cjFu.js";import"./useToggleState-GiuBKyzX.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
