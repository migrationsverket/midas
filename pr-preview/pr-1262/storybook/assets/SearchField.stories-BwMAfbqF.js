import{r as m,f as l,j as t}from"./iframe-CwW8sN4S.js";import{S as d}from"./SearchField-Cf8-ve1_.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-r8IgvPOV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B_M889tP.js";import"./clsx-B-dksMZM.js";import"./Form-CUc0WOwk.js";import"./useFocusRing-cgdKMhcs.js";import"./index-Bf5NZhsL.js";import"./index-BaeC46Uu.js";import"./Input-D9NlLKsA.js";import"./Hidden-CVoubVAI.js";import"./Button-C3AuE87p.js";import"./useLabel-DoKdb579.js";import"./useLabels-CwIlq1fJ.js";import"./useButton-CZZnZ_mn.js";import"./FieldError-BlJWYskW.js";import"./Text-BE9Sihnv.js";import"./clsx-Ciqy0D92.js";import"./Text-C5uja355.js";import"./RSPContexts-szw5AFHr.js";import"./Group-YWsXtnDF.js";import"./useControlledState-CC34MHAe.js";import"./useLocalizedStringFormatter-DJpiZ4xv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Boz7dTUi.js";import"./useField-C2elZhF8.js";import"./TextField.module-DdivwlC8.js";import"./search-DcWMHckK.js";import"./createLucideIcon-DzXM4i8f.js";import"./x-DNLXf0Tv.js";import"./useLocalizedStringFormatter-eUY7Q8gu.js";import"./Button-BNJwH1Cm.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BudlR0yM.js";import"./Collection-AVCAnE9e.js";import"./index-ZmllTkBI.js";import"./DragAndDrop-Ajqa6gNA.js";import"./getScrollParent-DKE2Book.js";import"./scrollIntoView-DJ_jtxbK.js";import"./SelectionIndicator-B23FeEQ3.js";import"./SelectionManager-DjP27Hq6.js";import"./useEvent-CeuSem5l.js";import"./useDescription-UAInHKf4.js";import"./inertValue-BkTyWPzz.js";import"./useHighlightSelectionDescription-D2QXW7oI.js";import"./useUpdateEffect-BLNpbhTQ.js";import"./ListKeyboardDelegate-CQEvvxFH.js";import"./useHasTabbableChild-DBg-9pAE.js";import"./Checkbox-DpRJymp8.js";import"./check-BwJGBTLI.js";import"./useToggleState-CDbmgQBe.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
