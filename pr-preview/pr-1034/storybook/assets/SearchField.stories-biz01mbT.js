import{r as m,f as l,j as t}from"./iframe-KIBzDUfV.js";import{S as d}from"./SearchField-wBKKt7WZ.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BGJX3Krq.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-gvhGp19W.js";import"./utils-B3s11CxX.js";import"./useLocalizedStringFormatter-BDrDCZSr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Zlf3Ks9e.js";import"./useFocusRing-DIi5rye2.js";import"./index-B7quJzXG.js";import"./index-CZhNCbuO.js";import"./useFormValidation-2ZDFF5_3.js";import"./useField-ttnFMQCX.js";import"./Button-B74IQIIY.js";import"./Hidden-_s5Kzwns.js";import"./useLabels-CsvdAiYC.js";import"./useButton-CQ4Hdmts.js";import"./search-CuOWBEZc.js";import"./createLucideIcon-DYfbqy8w.js";import"./ClearButton-DMoSgLD2.js";import"./Button-D_6pE22y.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DpqnENkr.js";import"./VisuallyHidden-BM7AOnhj.js";import"./x-CdrWRsxx.js";import"./FieldError-CQia8U4U.js";import"./Text-BcfqcDG4.js";import"./Text-D2dj_Y_G.js";import"./RSPContexts-BKpto4kw.js";import"./Collection-DoIqkMu3.js";import"./index-Bm9XISKF.js";import"./DragAndDrop-CwA-Nlcm.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D-2tbCkj.js";import"./SelectionManager-BOhA1hAm.js";import"./useEvent-DlPvFlnY.js";import"./useDescription-Cc1bnlw8.js";import"./inertValue-Befu1L7n.js";import"./useHighlightSelectionDescription-BO8rApP0.js";import"./useUpdateEffect-BB4T27K-.js";import"./ListKeyboardDelegate-uR_8vA3x.js";import"./useHasTabbableChild-B4dFDtuF.js";import"./Checkbox-BSdZBiOO.js";import"./Form-DwKNPYWJ.js";import"./check-R8312xx5.js";import"./useToggleState-Di-HErA6.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
