import{r as m,f as l,j as t}from"./iframe-Bn-EzP7D.js";import{S as d}from"./SearchField-C6DfXCRE.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BhghIXf3.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CQaUuJEL.js";import"./clsx-B-dksMZM.js";import"./Form-D8rPFjhB.js";import"./useFocusRing-vAuqzLMr.js";import"./index-C-alUKfN.js";import"./index-B6pc0358.js";import"./Input-BYmxFTo0.js";import"./Hidden-CqBpBgFh.js";import"./Button-Cc7PB3J4.js";import"./useLabel-Bl9zNTe3.js";import"./useLabels-DUs2w_Mz.js";import"./useButton-9sNlXb4L.js";import"./FieldError-Bmf4SDk8.js";import"./Text-Bqg57V95.js";import"./clsx-Ciqy0D92.js";import"./Text-6vmkm8mz.js";import"./RSPContexts-_DVvg2ct.js";import"./Group-DU8JgHqm.js";import"./useControlledState-DvYkz0eX.js";import"./useLocalizedStringFormatter-C_da5e_o.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D7Fko5bx.js";import"./useField-Ccah-lq_.js";import"./TextField.module-DdivwlC8.js";import"./search-CsGmyeS6.js";import"./createLucideIcon-DeptTAqN.js";import"./x-CdpnhCRh.js";import"./useLocalizedStringFormatter-Cu0XKz1n.js";import"./Button-CQePxhIL.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CKLV3oRP.js";import"./Collection-DgfdmHhP.js";import"./index-DA8HmDwz.js";import"./DragAndDrop-DjXNdZKS.js";import"./getScrollParent-CgJ84-Vu.js";import"./scrollIntoView-D5GyckjK.js";import"./SelectionIndicator-DAsR-d__.js";import"./SelectionManager-DBUORL24.js";import"./useEvent-BUUS48jd.js";import"./useDescription-DriieE3T.js";import"./inertValue-BioehTM3.js";import"./useHighlightSelectionDescription-DQkolTdD.js";import"./useUpdateEffect-BytjWiQg.js";import"./ListKeyboardDelegate-C0tygrq9.js";import"./useHasTabbableChild-BCmGo2vV.js";import"./Checkbox-B7sslHCs.js";import"./check-BE5M54n4.js";import"./useToggleState-BSSl4jbm.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
