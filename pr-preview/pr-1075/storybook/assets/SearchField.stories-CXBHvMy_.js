import{r as m,f as l,j as t}from"./iframe-DNgg1FE8.js";import{S as d}from"./SearchField-DF59vKoo.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DkWvyXyV.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-ExeGoWkK.js";import"./utils-lRZrmkjH.js";import"./useLocalizedStringFormatter-EtebeTvl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CjofCIp7.js";import"./useFocusRing-CtOEjHAH.js";import"./index-Cg_stJjE.js";import"./index-cpnsubof.js";import"./useFormValidation-cbENDbea.js";import"./useField-BxBjhEaP.js";import"./Button-Bmthtb1S.js";import"./Hidden-Or6zpinA.js";import"./useLabels-CUObwPbj.js";import"./useButton-CnjVfFKX.js";import"./search-Cbnf6y9E.js";import"./createLucideIcon-DUJhs-7-.js";import"./ClearButton-BYYWpD4-.js";import"./Button-CbrDss5c.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Tx6NcEdu.js";import"./VisuallyHidden-a7cFrZVC.js";import"./x-Hdk-5QGi.js";import"./FieldError-DQujyZQl.js";import"./Text-DyjqY5so.js";import"./Text-CIh1-RrY.js";import"./RSPContexts-Cby8FxwW.js";import"./Collection-AKYFosX_.js";import"./index-97TM62yl.js";import"./DragAndDrop-CnE5Chm_.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BZRVe7I8.js";import"./SelectionManager-BZftP1pO.js";import"./useEvent-Ci6J29Lf.js";import"./useDescription-BqooZyuI.js";import"./inertValue-B4izSdrG.js";import"./useHighlightSelectionDescription-C3htznRc.js";import"./useUpdateEffect-DaH9M9Oi.js";import"./ListKeyboardDelegate-D_doHbCR.js";import"./useHasTabbableChild-CHeN7Qw0.js";import"./Checkbox-BUMBkfI6.js";import"./Form-CKvs0swB.js";import"./check-CmIAEeKl.js";import"./useToggleState-CuCszEub.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
