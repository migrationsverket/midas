import{r as m,f as l,j as t}from"./iframe-DsPZ3k2a.js";import{S as d}from"./SearchField-DaoLyyMy.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Cee_fscw.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DVRplGTm.js";import"./clsx-B-dksMZM.js";import"./Form-DPGlfzHu.js";import"./useFocusRing-Cuzdmb74.js";import"./index-CaIK6bHz.js";import"./index-SpvYX93F.js";import"./Input-BVL5fXpA.js";import"./Hidden-vFz_M5_3.js";import"./Button-1ibsdlM-.js";import"./useLabel-CBpqBZPr.js";import"./useLabels-BLAf1Pjr.js";import"./useButton-td_Mid3P.js";import"./FieldError-B7hNQFWR.js";import"./Text-Dz2dRBNa.js";import"./clsx-Ciqy0D92.js";import"./Text-DD5LVeyW.js";import"./RSPContexts-CozbcOE6.js";import"./Group-BuYea3no.js";import"./useControlledState-Ynphlhkh.js";import"./useLocalizedStringFormatter-BhAe1Cmu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-yGIkuG_W.js";import"./useField-stTvCyM3.js";import"./TextField.module-DdivwlC8.js";import"./search-CFT3DI3G.js";import"./createLucideIcon-DFP7Vl1t.js";import"./x-B1yKqvoC.js";import"./useLocalizedStringFormatter-B_4X81TH.js";import"./Button-uXogGJvd.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BoP7uW4X.js";import"./Collection-tBFkX_de.js";import"./index-BJleMyuH.js";import"./DragAndDrop-mwXr8bzK.js";import"./getScrollParent-SsQAyo_d.js";import"./scrollIntoView-Co_8oPFw.js";import"./SelectionIndicator-B7XaYdIl.js";import"./SelectionManager-X-CmAPs6.js";import"./useEvent-c1TSVycZ.js";import"./useDescription-D1CIVKnU.js";import"./inertValue-QcF4qkce.js";import"./useHighlightSelectionDescription-CT9rxSbi.js";import"./useUpdateEffect-Co93Z-6I.js";import"./ListKeyboardDelegate-CouOaG_A.js";import"./useHasTabbableChild-BOSbcg4V.js";import"./Checkbox-CcP0fvZs.js";import"./check-C6XOZgOV.js";import"./useToggleState-D_YjB0Cg.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
