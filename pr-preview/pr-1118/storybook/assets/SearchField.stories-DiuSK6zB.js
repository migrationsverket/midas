import{r as m,f as l,j as t}from"./iframe-DamRJThF.js";import{S as d}from"./SearchField-CbtFPEts.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-09oUCZBC.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DgcDlDIC.js";import"./clsx-B-dksMZM.js";import"./Form-BLTkFQuM.js";import"./useFocusRing-bURA5Avq.js";import"./index-DlvZii8t.js";import"./index-BIVPacnA.js";import"./Input-XSgAA2TM.js";import"./Hidden-BuQbP2-q.js";import"./Button-uaN-QkBJ.js";import"./useLabels-DuyfGClc.js";import"./useButton-COqJVObs.js";import"./FieldError-DbzbM9K4.js";import"./Text-DJngJYPB.js";import"./clsx-Ciqy0D92.js";import"./Text-DL78e22r.js";import"./RSPContexts-Dggcgd1E.js";import"./Group-ujm_Ud_U.js";import"./useControlledState-XD3RgfmU.js";import"./useLocalizedStringFormatter-CCiP9Lwa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BOCJfouZ.js";import"./useField-B2FXZjju.js";import"./TextField.module-DdivwlC8.js";import"./search-PB52mF7O.js";import"./createLucideIcon-XwoK3Gs0.js";import"./x-C5nClHWi.js";import"./useLocalizedStringFormatter-9w7CTOq4.js";import"./Button-Cp7EKUE4.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BwmvdnrK.js";import"./Collection-tkyA9Vv4.js";import"./index-C30nhWEM.js";import"./DragAndDrop-Dr18nlrO.js";import"./getScrollParent-DgPjGSeo.js";import"./scrollIntoView-BpYJI3yu.js";import"./SelectionIndicator-Czi5_gzH.js";import"./SelectionManager-C2qvcpfW.js";import"./useEvent-CvQwGKSH.js";import"./useDescription-Bsqqymym.js";import"./inertValue-Cy_pHFBR.js";import"./useHighlightSelectionDescription-9lL31KV9.js";import"./useUpdateEffect-B-bsLqKI.js";import"./ListKeyboardDelegate-DyKCuwLA.js";import"./useHasTabbableChild-CLXRan9k.js";import"./Checkbox-z8cmHHDx.js";import"./check-DoGI2lMu.js";import"./useToggleState-BaBL_cqz.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
