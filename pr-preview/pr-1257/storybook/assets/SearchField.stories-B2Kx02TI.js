import{r as m,f as l,j as t}from"./iframe-BE6opBBQ.js";import{S as d}from"./SearchField-DkU5_U5H.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-8116AUKX.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C8ofSvVg.js";import"./clsx-B-dksMZM.js";import"./Form-BxafmMzb.js";import"./useFocusRing-B2vnni9l.js";import"./index-DAQ_HM4b.js";import"./index-yi7QOzex.js";import"./Input-C-66vJoQ.js";import"./Hidden-ZOBOpRNs.js";import"./Button-33q5ghqc.js";import"./useLabel-DYb1uAYa.js";import"./useLabels-CTwsRaEG.js";import"./useButton-Ds0Hb-Tu.js";import"./FieldError-rh0vxGNi.js";import"./Text-DssX7oue.js";import"./clsx-Ciqy0D92.js";import"./Text-DXKcxlic.js";import"./RSPContexts-D18522_R.js";import"./Group-DRgvDqS1.js";import"./useControlledState-DKq-QKGp.js";import"./useLocalizedStringFormatter-D7yAGsCf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C_muvX0L.js";import"./useField-Dwn3J9rA.js";import"./TextField.module-DdivwlC8.js";import"./search-Qc1nauMZ.js";import"./createLucideIcon-BCuYuRMM.js";import"./x-D6OAu6QL.js";import"./useLocalizedStringFormatter-CwdjWiaw.js";import"./Button-C8N-CVIU.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-TQ9t5iSG.js";import"./Collection-BDfNZ04v.js";import"./index-DBqXhfdp.js";import"./DragAndDrop-Cp2FwKKQ.js";import"./getScrollParent-B6ANYB0N.js";import"./scrollIntoView-CGjnRAcf.js";import"./SelectionIndicator-DIMhBzC8.js";import"./SelectionManager-DcfHF2BT.js";import"./useEvent-Df4XmH1c.js";import"./useDescription-Cm-6_l4m.js";import"./inertValue-RNQckmmi.js";import"./useHighlightSelectionDescription-D1w7wXmt.js";import"./useUpdateEffect-CQFKIiCd.js";import"./ListKeyboardDelegate--moD0RsY.js";import"./useHasTabbableChild-BSNdlZRd.js";import"./Checkbox-0UpU7gGh.js";import"./check-YAuxHrNr.js";import"./useToggleState-DxwtfNo9.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
