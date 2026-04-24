import{r as m,f as l,j as t}from"./iframe-IJuqoOmk.js";import{S as d}from"./SearchField-B47sqbd8.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-tpkVtc7T.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B1FkGHW3.js";import"./clsx-B-dksMZM.js";import"./Form-D4TqUibt.js";import"./useFocusRing-CkLNsvno.js";import"./index-CBGauQ3U.js";import"./index-DtmQ20tD.js";import"./Input-C9csjcmV.js";import"./Hidden-DzRh-64e.js";import"./Button-E9T7cgY3.js";import"./useLabel-BDetoK4o.js";import"./useLabels-W32AwYY6.js";import"./useButton-Ckvqp9dV.js";import"./FieldError-BFehnrZy.js";import"./Text-B8nSOSOw.js";import"./clsx-Ciqy0D92.js";import"./Text-Dbv6zmdw.js";import"./RSPContexts-BaJeT4Si.js";import"./Group-Dh2KQ9lo.js";import"./useControlledState-DL7f2Wr3.js";import"./useLocalizedStringFormatter-BdCq-opg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C2-ei7Yz.js";import"./useField-C73EInUm.js";import"./TextField.module-DdivwlC8.js";import"./search-DHwIi2FT.js";import"./createLucideIcon-9OQLRRNP.js";import"./x-BhOMJrhI.js";import"./useLocalizedStringFormatter-Vjm4sErI.js";import"./Button-DQFlWi2u.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bdyvpnxr.js";import"./Collection-Dbvuv6fS.js";import"./index-_UICZ5rp.js";import"./DragAndDrop-Cz4BzUBm.js";import"./getScrollParent-CQ3nADdi.js";import"./scrollIntoView-Cek-eHKE.js";import"./SelectionIndicator-BxSO78Cy.js";import"./SelectionManager-DPPUnvtT.js";import"./useEvent-tP2LEsJ9.js";import"./useDescription--7_MWUV8.js";import"./inertValue-D34pZZFP.js";import"./useHighlightSelectionDescription-BXQjKKlY.js";import"./useUpdateEffect-Bw5hbbwF.js";import"./ListKeyboardDelegate-OIAI4zXm.js";import"./useHasTabbableChild-B3D98cHZ.js";import"./Checkbox-CANdvbbZ.js";import"./check-CjqUkIyP.js";import"./useToggleState-CaCY45Zr.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
