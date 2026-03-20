import{r as m,f as l,j as t}from"./iframe-wk1uxL0R.js";import{S as d}from"./SearchField-D442Pa6w.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BvirOuQE.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BKmHeGDP.js";import"./clsx-B-dksMZM.js";import"./Form-CL-CASjO.js";import"./useFocusRing-mtIFdSYG.js";import"./index-DpCKx4XG.js";import"./index-B9EV4M0O.js";import"./Input-_h69kBPT.js";import"./Hidden-OSmil6gU.js";import"./Button-BJm7MwiY.js";import"./useLabels-Z8jFtyR8.js";import"./useButton-CzrLl786.js";import"./FieldError-5unwDnAP.js";import"./Text-D_aWqMlk.js";import"./clsx-Ciqy0D92.js";import"./Text-BueF1im7.js";import"./RSPContexts-CLBTCfJ3.js";import"./Group-CdK-XhPN.js";import"./useControlledState-DQ_KGuHt.js";import"./useLocalizedStringFormatter-Ceub4S3z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CCULMzBF.js";import"./useField-cHCcHNn5.js";import"./TextField.module-DdivwlC8.js";import"./search-DjoNJW_J.js";import"./createLucideIcon-DGfTdO3_.js";import"./x-DV0orzgr.js";import"./useLocalizedStringFormatter-KI7sGx_d.js";import"./Button-DDyJ2oTu.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C2txOMCT.js";import"./Collection-BoTnuHoE.js";import"./index-0q5YrKOu.js";import"./DragAndDrop-24GuFxaP.js";import"./getScrollParent-CmjId40O.js";import"./scrollIntoView-C5wBRPen.js";import"./SelectionIndicator-_2glPY4T.js";import"./SelectionManager-C1ludoOD.js";import"./useEvent-CWBKex4u.js";import"./useDescription-B-96JeUD.js";import"./inertValue-Cn2MncTk.js";import"./useHighlightSelectionDescription-BoGGg1KZ.js";import"./useUpdateEffect-BlwkEUm-.js";import"./ListKeyboardDelegate-CxBl8hgQ.js";import"./useHasTabbableChild-aboGbhFD.js";import"./Checkbox-viZxf0Bs.js";import"./check-KGi_FrXR.js";import"./useToggleState-BMmoDZPa.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
