import{r as m,f as l,j as t}from"./iframe-BBdvX6q7.js";import{S as d}from"./SearchField-Diu4Psxr.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Csm1sbXr.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BhM9cLZz.js";import"./clsx-B-dksMZM.js";import"./Form-BdaOdDWJ.js";import"./useFocusRing-CiIiFeie.js";import"./index-C0SO2SJv.js";import"./index-Dr2k3dKm.js";import"./Input-BLzkoyeG.js";import"./Hidden-BOrCZM9C.js";import"./Button-Dzf67HgD.js";import"./useLabel-yXobHl3x.js";import"./useLabels-CYBypbHC.js";import"./useButton-CExlMDMj.js";import"./FieldError-W4WIQ6PE.js";import"./Text-DFmdAipG.js";import"./clsx-Ciqy0D92.js";import"./Text-DZB5jszh.js";import"./RSPContexts-Dhr-dkrR.js";import"./Group-C6QOXau-.js";import"./useControlledState-DuJYRQSo.js";import"./useLocalizedStringFormatter-Be9Ugeet.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DnMCpGV2.js";import"./useField-cJot5tll.js";import"./TextField.module-DdivwlC8.js";import"./search-BkNoydza.js";import"./createLucideIcon-Bf-KaMYu.js";import"./x-KAA9DnbB.js";import"./useLocalizedStringFormatter-J63fVK0g.js";import"./Button-DCS9i38V.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BUp-onp8.js";import"./Collection-CnZYrlip.js";import"./index-BoRceWYL.js";import"./DragAndDrop-Clahp839.js";import"./getScrollParent-Cpdl4rHQ.js";import"./scrollIntoView-VD24PgV1.js";import"./SelectionIndicator-BHjSx8yF.js";import"./SelectionManager-CUppn1fa.js";import"./useEvent-ByURV-nf.js";import"./useDescription-CRjQLCoE.js";import"./inertValue-DyprpQA7.js";import"./useHighlightSelectionDescription-QxzUYxtv.js";import"./useUpdateEffect-DaQOQKEs.js";import"./ListKeyboardDelegate-D7hgOMLG.js";import"./useHasTabbableChild-C6TPSsu3.js";import"./Checkbox-aTLwBEWJ.js";import"./check-DFyXqa_H.js";import"./useToggleState-CAcVlSW9.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
