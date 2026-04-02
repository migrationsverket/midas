import{r as m,f as l,j as t}from"./iframe-B1eD605p.js";import{S as d}from"./SearchField-CJx9bWiw.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B0Ae-NDQ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BOUcnJoC.js";import"./clsx-B-dksMZM.js";import"./Form-TOmJuLrj.js";import"./useFocusRing-D_OiBDkF.js";import"./index-BWkRMe8I.js";import"./index-TufsVr0_.js";import"./Input-A65XN-IN.js";import"./Hidden-B3lfQGCO.js";import"./Button-DMefbg_Z.js";import"./useLabel-D7VH59ae.js";import"./useLabels-BD-zpGYP.js";import"./useButton-B9teiuVu.js";import"./FieldError-DNdCu579.js";import"./Text-DAxM1VuH.js";import"./clsx-Ciqy0D92.js";import"./Text-EI0dskfY.js";import"./RSPContexts-Dl1zhDr2.js";import"./Group-DXiXxn5F.js";import"./useControlledState-DOfAUcES.js";import"./useLocalizedStringFormatter-BVzW25Bt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BN1OkKY_.js";import"./useField-BEBUG3LI.js";import"./TextField.module-DdivwlC8.js";import"./search-BmBZ-tGO.js";import"./createLucideIcon-B1NmALCH.js";import"./x-hYuZlWGy.js";import"./useLocalizedStringFormatter-CLR4R1lI.js";import"./Button-vXlcn_Zz.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D_M3vS6z.js";import"./Collection-7BpZitS7.js";import"./index-De98YIfI.js";import"./DragAndDrop-BMMhITG5.js";import"./getScrollParent-1L3daVvs.js";import"./scrollIntoView-DZVXXs-a.js";import"./SelectionIndicator-CvDD31Qf.js";import"./SelectionManager-jhWX0Faa.js";import"./useEvent-BJos8xnR.js";import"./useDescription-Bqwk-ftC.js";import"./inertValue-BONszKhC.js";import"./useHighlightSelectionDescription-B0kGyo7s.js";import"./useUpdateEffect-CR1eGAMt.js";import"./ListKeyboardDelegate-C--TIfdb.js";import"./useHasTabbableChild-CjB9wq9O.js";import"./Checkbox-D0N-s4v4.js";import"./check-C4ltoEZF.js";import"./useToggleState-BSce6mIq.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
