import{r as m,f as l,j as t}from"./iframe-CxuIO7a7.js";import{S as d}from"./SearchField-CV7yr1hO.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Bk9L5-aZ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CkPJQRbj.js";import"./utils-CXGq3B-b.js";import"./useLocalizedStringFormatter-CU3oIUiy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DkRYEP4M.js";import"./useFocusRing-B6J0mh3g.js";import"./index-DUo9Y50I.js";import"./index-gnxrYTyY.js";import"./useFormValidation-Csa25t6B.js";import"./useField-DWmTECu8.js";import"./Button-DRAmhx2z.js";import"./Hidden-BA1jWOK0.js";import"./useLabels-HWrLLSK0.js";import"./useButton-D-iZZiOo.js";import"./search-jxusMEIt.js";import"./createLucideIcon-CDa9bc5n.js";import"./ClearButton-OQyyTq9v.js";import"./Button-BYXk57rI.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D0rrceAj.js";import"./VisuallyHidden-aHkENNoL.js";import"./x-B251onrY.js";import"./FieldError-94aBjoZy.js";import"./Text-DdhSqAlM.js";import"./Text-DcyHZz0V.js";import"./RSPContexts-Dzk6vf8s.js";import"./Collection-9GaMkY2M.js";import"./index-DQR1Cy2T.js";import"./DragAndDrop-DgJwMp7U.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C_slZNUR.js";import"./SelectionManager-lvwb8BA8.js";import"./useEvent-BmZgTZWk.js";import"./useDescription-vGGme-gD.js";import"./inertValue-DZ3tQRP7.js";import"./useHighlightSelectionDescription-D2DUsP88.js";import"./useUpdateEffect-Qa0vMa7P.js";import"./ListKeyboardDelegate-Vn6W_k8b.js";import"./useHasTabbableChild-ClfD23xz.js";import"./Checkbox-B-EUr-eh.js";import"./Form-bIjQ-EOX.js";import"./check-Da0396s5.js";import"./useToggleState-jsumG1ky.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
