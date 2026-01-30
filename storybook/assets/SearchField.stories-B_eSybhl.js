import{r as m,f as l,j as t}from"./iframe-Ci13ld7O.js";import{S as d}from"./SearchField-DZUhKiZW.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C4kl9LPY.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BPjdf_b0.js";import"./utils-Cd0LQrts.js";import"./useLocalizedStringFormatter-D47gSq9M.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DcnpuNkd.js";import"./useFocusRing-DnhJhnzY.js";import"./index-yP8H7dy3.js";import"./index-7gUS6nb-.js";import"./useFormValidation-lyydmePw.js";import"./useField-CG62_5pp.js";import"./Button-YvURXki4.js";import"./Hidden-BWsE9twn.js";import"./useLabels-BR_CPQ7_.js";import"./useButton-BJUfgxuB.js";import"./search-8qTVw1sK.js";import"./createLucideIcon-Bj58XDKs.js";import"./ClearButton-Cw0kPuav.js";import"./Button-fdROVxmt.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Ys_jkXo3.js";import"./VisuallyHidden-C1I07cqa.js";import"./x-CkflMYc7.js";import"./FieldError-CNS2gCFK.js";import"./Text-BVmiYMQy.js";import"./Text-BPRonoR2.js";import"./RSPContexts-CFalA0-F.js";import"./Collection-CdINeEAb.js";import"./index-CQwP3ol2.js";import"./DragAndDrop-DPm7yRKx.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D7GO9bBt.js";import"./SelectionManager-D5qHVcdA.js";import"./useEvent-C4x00_RR.js";import"./useDescription-4N3M-fgK.js";import"./inertValue-dtY26x6u.js";import"./useHighlightSelectionDescription-L4xzhFrP.js";import"./useUpdateEffect-DlSpsD90.js";import"./ListKeyboardDelegate-B417rgL2.js";import"./useHasTabbableChild-BnBXvy_V.js";import"./Checkbox-7MG-6uPV.js";import"./Form-BgjGPFuC.js";import"./check-D9VBBJoR.js";import"./useToggleState-Ge7wqY3I.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
