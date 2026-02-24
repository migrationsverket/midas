import{r as m,f as l,j as t}from"./iframe-DewzuY2Y.js";import{S as d}from"./SearchField-pDZszEPn.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-NVlGWpmO.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Ck-VtJ3k.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DKrm3iPF.js";import"./useObjectRef-D02ig_Er.js";import"./useLocalizedStringFormatter-7896F-u-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Cgf_BJYx.js";import"./useFocusRing-Bu9BKNcc.js";import"./useFocusable-D4F7j4yX.js";import"./index-CGxbGCj-.js";import"./index-YF-MvE2f.js";import"./useFormValidation-lSb8KKAi.js";import"./useField-DsMSm3hR.js";import"./Button-B263f3iS.js";import"./utils-B9eCRML0.js";import"./Hidden-DQi6D_EL.js";import"./number-DfkVkf0F.js";import"./useLabels-DqUr0jsw.js";import"./useButton-fhI4OoXn.js";import"./search-DlKloxg_.js";import"./createLucideIcon-BpgdMRa6.js";import"./ClearButton-DA2wzIBp.js";import"./Button-DrlbWmQB.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BU0D5dPi.js";import"./VisuallyHidden-BcUmonei.js";import"./x-Dt71Rz9m.js";import"./FieldError-BAoeLCIl.js";import"./Text-CF2XopxT.js";import"./Text-Bab9BnDj.js";import"./RSPContexts-D0MwBZX-.js";import"./Collection-DfNZS0Iw.js";import"./CollectionBuilder-B-bwIOQU.js";import"./index-DtnZ5gia.js";import"./DragAndDrop-CjJBB7SO.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cf1hCYbC.js";import"./SelectionManager-C13R8ogi.js";import"./useEvent-Co8FlwDh.js";import"./useDescription-DZHnrBI1.js";import"./inertValue-i2NBbLR0.js";import"./useHighlightSelectionDescription-jDg8bwlo.js";import"./useUpdateEffect-2mDxs41L.js";import"./ListKeyboardDelegate-CsRH7wZv.js";import"./useHasTabbableChild-CL3EZsla.js";import"./Checkbox-BvEQ-bqB.js";import"./Form-CAi5wZg8.js";import"./check-DoQyjM_K.js";import"./useToggleState-C_eHilyZ.js";const be={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,p]=m.useState(""),[s]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=s.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:p,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const we=["SimpleSearch"];export{i as SimpleSearch,we as __namedExportsOrder,be as default};
