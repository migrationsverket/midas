import{r as m,f as l,j as t}from"./iframe-BLFVAebz.js";import{S as d}from"./SearchField-nllgtyQ8.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B3qbHaUY.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-COORazi9.js";import"./clsx-B-dksMZM.js";import"./Form-C0uqP4DY.js";import"./useFocusRing-BtgCc4uS.js";import"./index-DxSzAXil.js";import"./index-MFhL1fTj.js";import"./Input-B_ew_Foh.js";import"./Hidden-DwfkqXbu.js";import"./Button-CDRPkfYl.js";import"./useLabel-C9MLZ0ZV.js";import"./useLabels-DsM9HmY4.js";import"./useButton-Dkva8HAQ.js";import"./FieldError-CotC56cl.js";import"./Text-CMpPyQHQ.js";import"./clsx-Ciqy0D92.js";import"./Text-BI792DVZ.js";import"./RSPContexts-dhIaIC8d.js";import"./Group-CzvfKl4j.js";import"./useControlledState-DKdXVV8i.js";import"./useLocalizedStringFormatter-D6yZmrtf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ccfcKYd7.js";import"./useField-B551ugOM.js";import"./TextField.module-DdivwlC8.js";import"./search-BMj_oj-v.js";import"./createLucideIcon-ioBnSaPP.js";import"./x-czyhHEQN.js";import"./useLocalizedStringFormatter-DZSD3y5K.js";import"./Button-DNuEBjZY.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BFj9mjRF.js";import"./Collection-BYB_FHMU.js";import"./index-BX_LU5SM.js";import"./DragAndDrop-0nSArv3G.js";import"./getScrollParent-VrUltlJn.js";import"./scrollIntoView-D0PGn0f2.js";import"./SelectionIndicator-DJw2BmtQ.js";import"./SelectionManager-DOBraOrU.js";import"./useEvent-BSHnIrcj.js";import"./useDescription-ChbjjRBw.js";import"./inertValue-DqkHYO9L.js";import"./useHighlightSelectionDescription-B9kH4G4C.js";import"./useUpdateEffect-BY-5Usb6.js";import"./ListKeyboardDelegate-BhTruHSe.js";import"./useHasTabbableChild-Cr2sAGF-.js";import"./Checkbox-DHjTGOE_.js";import"./check-DrYC1yJG.js";import"./useToggleState-Cz1X7JpX.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
