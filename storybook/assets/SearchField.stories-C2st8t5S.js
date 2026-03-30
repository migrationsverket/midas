import{r as m,f as l,j as t}from"./iframe-BY9vh6z6.js";import{S as d}from"./SearchField-D5tGkTAr.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-KIlnBmn_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CvO9wRJK.js";import"./clsx-B-dksMZM.js";import"./Form-rQZlhbIF.js";import"./useFocusRing-C58Wldhw.js";import"./index-BCEmrA-k.js";import"./index-BY7PPuin.js";import"./Input-v1ubs1Lq.js";import"./Hidden-CtZVxLKv.js";import"./Button-BRroCyFc.js";import"./useLabel-BGiQ4ILo.js";import"./useLabels-BEKF_Ui1.js";import"./useButton-C5riGvhj.js";import"./FieldError-DeHNS8yq.js";import"./Text-CS2W2lPB.js";import"./clsx-Ciqy0D92.js";import"./Text-D2NltcsY.js";import"./RSPContexts-DvzJiI6P.js";import"./Group-Byz5DoXV.js";import"./useControlledState-tRNWjYkK.js";import"./useLocalizedStringFormatter-DvhmXb5T.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BgrPSmKs.js";import"./useField-tV89OT8_.js";import"./TextField.module-DdivwlC8.js";import"./search-Bnduc4d6.js";import"./createLucideIcon-BXNm475a.js";import"./x-L5wRjwNt.js";import"./useLocalizedStringFormatter-CAo6NRgz.js";import"./Button-C6EXF9Um.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D_LmADCN.js";import"./Collection-DtE19mci.js";import"./index-BzZ2BuIi.js";import"./DragAndDrop-B_pUGciC.js";import"./getScrollParent-DrF2sSND.js";import"./scrollIntoView-CCKb3jUj.js";import"./SelectionIndicator-DamMI_aq.js";import"./SelectionManager-Br_H8_zH.js";import"./useEvent-Dxv08bvf.js";import"./useDescription-Cjh6szWZ.js";import"./inertValue-DPpDgOpj.js";import"./useHighlightSelectionDescription-BIl2Tm4S.js";import"./useUpdateEffect-7lR-FIgq.js";import"./ListKeyboardDelegate-z0K9q_6J.js";import"./useHasTabbableChild-gMlr-TzT.js";import"./Checkbox-C2WWPzzu.js";import"./check-DymE3jol.js";import"./useToggleState-CF_Jv0f6.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
