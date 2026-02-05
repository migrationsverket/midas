import{r as m,f as l,j as t}from"./iframe-Da7nq29g.js";import{S as d}from"./SearchField-CsvmpKyF.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D8hyEEo1.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DqL64D7D.js";import"./utils-B0CyUW-5.js";import"./useLocalizedStringFormatter-CdeSJGSi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-KyGlqxDh.js";import"./useFocusRing-BfWaxzv3.js";import"./index-Chz3wJrr.js";import"./index-BQQ1R4UO.js";import"./useFormValidation-TJjpFVH5.js";import"./useField-D5pIHEIl.js";import"./Button-CtgdX1q6.js";import"./Hidden-DRaikK2a.js";import"./useLabels-uo9Op09U.js";import"./useButton-DItgdLXo.js";import"./search-BaB60d5k.js";import"./createLucideIcon-DXCReTis.js";import"./ClearButton-gtawD5du.js";import"./Button-BlivHiUN.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B5xCdXuP.js";import"./VisuallyHidden-DaXw9Zgt.js";import"./x-BfVUye5v.js";import"./FieldError-N_3bhSnW.js";import"./Text-BYaoYc1H.js";import"./Text-BQLX2n4Y.js";import"./RSPContexts-CA4TT0Pe.js";import"./Collection-C71fexbD.js";import"./index-Ck07IVt1.js";import"./DragAndDrop-D1NpaDxD.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-73xE8EMW.js";import"./SelectionManager-BQXF1WZ2.js";import"./useEvent-Dtm5G7ur.js";import"./useDescription-VrbZdKT0.js";import"./inertValue-XRkpzllw.js";import"./useHighlightSelectionDescription-s32Jm17Z.js";import"./useUpdateEffect-C8R919p5.js";import"./ListKeyboardDelegate-i42XoEpM.js";import"./useHasTabbableChild-BVLF7yzS.js";import"./Checkbox-CxY7wjHN.js";import"./Form-D9xjglpP.js";import"./check-BjDx6IDg.js";import"./useToggleState-TEB3Vjy4.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
