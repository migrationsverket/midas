import{r as m,f as l,j as t}from"./iframe-QDSUgBpo.js";import{S as d}from"./SearchField-2pYqtt4k.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Ca3d-nlY.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-0ntZUwbV.js";import"./utils-DvLern-H.js";import"./useLocalizedStringFormatter-BuFmuI1y.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DiPOIOEe.js";import"./useFocusRing-DJFUjDnL.js";import"./index-BF2Mp0-C.js";import"./index-DczpGf_O.js";import"./useFormValidation-D9lbBzHN.js";import"./useField-H3aLMADt.js";import"./Button-C3ndRLHV.js";import"./Hidden-BN-CZ8Az.js";import"./useLabels-EtKw0NwM.js";import"./useButton-Ca39907a.js";import"./search-CVgaiBsl.js";import"./createLucideIcon-awWdQq2I.js";import"./ClearButton-Blpe83rv.js";import"./x-DQSWlImf.js";import"./Button-B_32-CvO.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-CpELJUen.js";import"./VisuallyHidden-RUty4LXR.js";import"./FieldError-BkvFLAiM.js";import"./Text-CvZZMQm8.js";import"./Text-DR2iN84k.js";import"./RSPContexts-DdhSCSVx.js";import"./Collection-D4C6-BXJ.js";import"./index-XRXkwlnM.js";import"./DragAndDrop-DmWgXGK_.js";import"./getScrollParent-CoiIkSSx.js";import"./scrollIntoView-DWJeooee.js";import"./SelectionIndicator-BIhL9hvF.js";import"./SelectionManager-CiUsdP4o.js";import"./useEvent-C8LuCS9K.js";import"./useDescription-tD4XjceD.js";import"./inertValue-D9xz9yfp.js";import"./useHighlightSelectionDescription-CXDbMMIq.js";import"./useUpdateEffect-DYEoqaYh.js";import"./ListKeyboardDelegate-CQLphkwI.js";import"./useHasTabbableChild-CvuIf2Pw.js";import"./Checkbox-Bduk3Pow.js";import"./Form-BzmpAFOD.js";import"./check-D9QgD2Z9.js";import"./useToggleState-DuZR1H6d.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
