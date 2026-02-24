import{r as m,f as l,j as t}from"./iframe-DJxIXxf2.js";import{S as d}from"./SearchField-BaBqvyfV.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CVErcfo2.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Ck-VtJ3k.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C1p1aY8E.js";import"./utils-B_KlqI5i.js";import"./useLocalizedStringFormatter-BJvVBtx8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CqOvbwYV.js";import"./useFocusRing-COgDf2QV.js";import"./index-B08RvMtD.js";import"./index-QDuJYXlY.js";import"./useFormValidation-IBNADZfB.js";import"./useField-BXl4tVWh.js";import"./Button-CIL_abe4.js";import"./Hidden-DoMNzo3F.js";import"./useLabels-B8ZHiySF.js";import"./useButton-CDOgKioF.js";import"./search-Cd-25d48.js";import"./createLucideIcon-82x2wRy4.js";import"./ClearButton-YSTS1T_q.js";import"./Button-YUjToJ3r.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CBcMRp9p.js";import"./VisuallyHidden-fBTKN9Mv.js";import"./x-Bp5hmktp.js";import"./FieldError-DYGSUEKV.js";import"./Text--wP8bLIY.js";import"./Text-fN96k5_K.js";import"./RSPContexts-aF70D7kh.js";import"./Collection-CNHbJK5e.js";import"./index-81brxfSB.js";import"./DragAndDrop-CQQRlFZS.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-EFKob9mQ.js";import"./SelectionManager-BIKAQhZe.js";import"./useEvent-BKeRbScP.js";import"./useDescription-8DpELlxG.js";import"./inertValue-C8Pcbneo.js";import"./useHighlightSelectionDescription-B7x6UOtX.js";import"./useUpdateEffect-DDmQtaMI.js";import"./ListKeyboardDelegate-8IRcIyPc.js";import"./useHasTabbableChild-C82KK3yR.js";import"./Checkbox-DtnERNeu.js";import"./Form-DQvhgMmm.js";import"./check-BYJLIVPI.js";import"./useToggleState-Dqgeb-8x.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
