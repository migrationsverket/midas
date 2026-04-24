import{r as m,f as l,j as t}from"./iframe-EPbYJ3aH.js";import{S as d}from"./SearchField-DzWOmisa.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DoalZMSp.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BFyuPOg-.js";import"./clsx-B-dksMZM.js";import"./Form-Bo93hY_x.js";import"./useFocusRing-vFk-w4SV.js";import"./index-CMa-XrnA.js";import"./index-CEkD2vSE.js";import"./Input-CLcVXigI.js";import"./Hidden-CHhsJSI8.js";import"./Button-D1GYvhMH.js";import"./useLabel-Cb-B9e5n.js";import"./useLabels-bRXyuIVZ.js";import"./useButton-CS8vRMxU.js";import"./FieldError-QU59tQ0w.js";import"./Text-DXPQUnae.js";import"./clsx-Ciqy0D92.js";import"./Text-DaRCpEpM.js";import"./RSPContexts-BCgG5sDy.js";import"./Group-BQ6Jklka.js";import"./useControlledState-B7DCF9AW.js";import"./useLocalizedStringFormatter-Bl42Cfqn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CQExyJqA.js";import"./useField-Czz-xLhT.js";import"./TextField.module-DdivwlC8.js";import"./search-DbD1KaGP.js";import"./createLucideIcon-CDlkFEI-.js";import"./x-DpzpagIl.js";import"./useLocalizedStringFormatter-scKp9dSq.js";import"./Button-CF00LYtn.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CRUsIDEu.js";import"./Collection-BCcQ8_2d.js";import"./index-Cx30adBd.js";import"./DragAndDrop-DKGMDmL2.js";import"./getScrollParent-IjDHduKu.js";import"./scrollIntoView-DIrfA17L.js";import"./SelectionIndicator-Zdxp2d1B.js";import"./SelectionManager-fY8UI5b1.js";import"./useEvent-DrVet--T.js";import"./useDescription-B2aIStsg.js";import"./inertValue-Dh2-7trN.js";import"./useHighlightSelectionDescription-DoEUofaS.js";import"./useUpdateEffect-BuQrKDqm.js";import"./ListKeyboardDelegate-CBTehG4B.js";import"./useHasTabbableChild-Crg7iMMJ.js";import"./Checkbox-C0IG6UXq.js";import"./check-p1RnRgI8.js";import"./useToggleState-30gFcbfu.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
