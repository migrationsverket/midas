import{r as m,f as l,j as t}from"./iframe-ghVbh2m4.js";import{S as d}from"./SearchField-Dzl3bmMY.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CWYO-ziM.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cm-qnzwi.js";import"./utils-Ct4jCNtU.js";import"./useLocalizedStringFormatter-DfDL6ivr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DV0xQLx0.js";import"./useFocusRing-tQFcCqqc.js";import"./index-ewvUbER1.js";import"./index-Bm6sjKM_.js";import"./useFormValidation-Bz2uPf8x.js";import"./useField-BbZI2M8z.js";import"./Button-Dx2HIyuj.js";import"./Hidden-CsZ06DKs.js";import"./useLabels-Da1vllL2.js";import"./useButton-BCYBif3G.js";import"./search-D_MOYELT.js";import"./createLucideIcon-iA7xlyS0.js";import"./ClearButton-DY9yWFgu.js";import"./Button--cicrOD0.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-BAvHj6kP.js";import"./VisuallyHidden-BqLrRw5b.js";import"./x-CjlhRBsD.js";import"./FieldError-DYXnaMAk.js";import"./Text-CATOuxZy.js";import"./Text-agLWRutI.js";import"./RSPContexts-DiGFJgBW.js";import"./Collection-Bwnw311o.js";import"./index-BCAzQp90.js";import"./DragAndDrop-BJRmfGVH.js";import"./getScrollParent-BMO_SkXK.js";import"./scrollIntoView-B7zrt0js.js";import"./SelectionIndicator-DVW27rT4.js";import"./SelectionManager-bsvE-HiB.js";import"./useEvent-DMOxFrhy.js";import"./useDescription-DdI46JkH.js";import"./inertValue-BAwKYnmA.js";import"./useHighlightSelectionDescription-Dytxn0_A.js";import"./useUpdateEffect-CNddusky.js";import"./ListKeyboardDelegate-Da-HzqLh.js";import"./useHasTabbableChild-DN5OZ_kS.js";import"./Checkbox-DkUUD0NP.js";import"./Form-BkK1wOoE.js";import"./check-BLnj-ZQ6.js";import"./useToggleState-DCKD15PA.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
