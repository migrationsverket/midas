import{r as m,f as l,j as t}from"./iframe-2x8aApk-.js";import{S as d}from"./SearchField-QT3re8LT.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DZfeVtdZ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CaZtGL-H.js";import"./utils-DVWHc22k.js";import"./useLocalizedStringFormatter-B7eTh4qi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DNgekNgo.js";import"./useFocusRing-D1LuvRFA.js";import"./index-BnRZASBM.js";import"./index-EU_EHTku.js";import"./useFormValidation-zPxSqPZf.js";import"./useField-C-cvn-nF.js";import"./Button-BEnUWui9.js";import"./Hidden-T6GEIuO8.js";import"./useLabels-DUzYQyy8.js";import"./useButton-N1FUyUpJ.js";import"./search-B1FzH44D.js";import"./createLucideIcon-D_YgEBTV.js";import"./ClearButton-l23qajG1.js";import"./Button-BZEsodJe.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-EKnKibO9.js";import"./VisuallyHidden-B5MaFoQn.js";import"./x-DL-KyPr6.js";import"./FieldError-CN7fikOS.js";import"./Text-GWj5McON.js";import"./Text-CjH8oWQJ.js";import"./RSPContexts-DzOvT6u7.js";import"./Collection-CG88hFGy.js";import"./index-CXXMt1w9.js";import"./DragAndDrop-DWu4BSLp.js";import"./getScrollParent-C1eon5Rc.js";import"./scrollIntoView-B1ez5sy3.js";import"./SelectionIndicator-D9jeLipo.js";import"./SelectionManager-DB2E2h7r.js";import"./useEvent-BZht9i95.js";import"./useDescription-CX4-cmgs.js";import"./inertValue-oDhtlPv0.js";import"./useHighlightSelectionDescription-DvmZ3fG1.js";import"./useUpdateEffect-BCnLLfFa.js";import"./ListKeyboardDelegate-CB5h3evo.js";import"./useHasTabbableChild-CCoaJIUO.js";import"./Checkbox-CJG-9tgm.js";import"./Form-DkZdQKDH.js";import"./check-DqwicyyY.js";import"./useToggleState-U5X8yzO7.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
