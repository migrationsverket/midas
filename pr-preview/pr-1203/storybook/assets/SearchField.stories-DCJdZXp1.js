import{r as m,f as l,j as t}from"./iframe-QwZUgaLO.js";import{S as d}from"./SearchField-OjdOqL3l.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-1x2CH6mk.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C5PAaS6l.js";import"./clsx-B-dksMZM.js";import"./Form-B3ZZchXU.js";import"./useFocusRing-DCV7Bvm3.js";import"./index-CU2b6dbl.js";import"./index-DwVC30Wi.js";import"./Input-C_LA6nTg.js";import"./Hidden-qsgafZIY.js";import"./Button-D9S27FhL.js";import"./useLabel-JXRtA5SB.js";import"./useLabels-BoIdpiTR.js";import"./useButton-CvKomkMU.js";import"./FieldError-vnsH4bsL.js";import"./Text-CjsrR6_S.js";import"./clsx-Ciqy0D92.js";import"./Text-XaIsUgQ9.js";import"./RSPContexts-CRJgyFJK.js";import"./Group-Bpr5GJCw.js";import"./useControlledState-DGCNkOh1.js";import"./useLocalizedStringFormatter-B8e3KCPt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Ci1dramH.js";import"./useField-D8U6vQ86.js";import"./TextField.module-DdivwlC8.js";import"./search-BfDo_xsw.js";import"./createLucideIcon-BN5DVyg5.js";import"./x-CLIz2YWd.js";import"./useLocalizedStringFormatter-C0ixRk9u.js";import"./Button-CEqP3wI_.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B7afogpp.js";import"./Collection-BWpKskv2.js";import"./index-C5wuU4_V.js";import"./DragAndDrop-BR8tLuwe.js";import"./getScrollParent-DxQpJ7qd.js";import"./scrollIntoView-CcRWGSSD.js";import"./SelectionIndicator-CCJXiU-C.js";import"./SelectionManager-C_b-UP1r.js";import"./useEvent-DoVh1qxn.js";import"./useDescription-BLH5SCIP.js";import"./inertValue-CfrzDBk2.js";import"./useHighlightSelectionDescription-D31hUEZx.js";import"./useUpdateEffect-BLz2aK0p.js";import"./ListKeyboardDelegate-BDdbKLH6.js";import"./useHasTabbableChild-Ddz0HAFE.js";import"./Checkbox-CxUFjKdr.js";import"./check-C7NsAe8s.js";import"./useToggleState-B59JPmDj.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
