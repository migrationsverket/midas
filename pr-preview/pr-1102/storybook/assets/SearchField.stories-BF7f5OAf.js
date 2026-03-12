import{r as m,f as l,j as t}from"./iframe-BKt9EFfY.js";import{S as d}from"./SearchField-DozM3FUg.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BFrd0q5b.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BZs3lQsK.js";import"./utils-UHPC9nWZ.js";import"./useLocalizedStringFormatter-CEsxsRDH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BuVFyPkC.js";import"./useFocusRing-cxIDuQxL.js";import"./index--2FdksYv.js";import"./index-YDrS01VO.js";import"./useFormValidation-Dsa57_F2.js";import"./useField-DoDrCpUl.js";import"./Button-54WAdtvn.js";import"./Hidden-BIzqGf_Y.js";import"./useLabels-Dg5v2BlI.js";import"./useButton-DZMjZ0Xn.js";import"./search-BcIqytgX.js";import"./createLucideIcon-CwzpYKvj.js";import"./ClearButton-n75y9QZM.js";import"./x-DbaGL1T9.js";import"./Button-BP3_jhUy.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-C4CK9KxZ.js";import"./VisuallyHidden-oXJqa0w4.js";import"./FieldError-x-AT8pl1.js";import"./Text-Cx5eezfb.js";import"./Text-QG4NB2hl.js";import"./RSPContexts-C1Y2t1uV.js";import"./Collection-BuYk4Gk5.js";import"./index-CcGrGtPC.js";import"./DragAndDrop-Qs4XP6_h.js";import"./getScrollParent-JoXPjCTV.js";import"./scrollIntoView-D7dRqv7d.js";import"./SelectionIndicator-fUDz65K_.js";import"./SelectionManager-D3YQtbVB.js";import"./useEvent-BsotznEQ.js";import"./useDescription-ClLBcdJg.js";import"./inertValue-CXVXOTrN.js";import"./useHighlightSelectionDescription-CcE0HAXh.js";import"./useUpdateEffect-BPAZNxGP.js";import"./ListKeyboardDelegate-BEZyuz-l.js";import"./useHasTabbableChild-mm-op1AL.js";import"./Checkbox-DG48q2BP.js";import"./Form-BIn8UGe1.js";import"./check-DntiIOxH.js";import"./useToggleState-4kt2hSTJ.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
