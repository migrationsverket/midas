import{r as m,f as l,j as t}from"./iframe-CmC6_uFn.js";import{S as d}from"./SearchField-DtpeaX-C.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C4bREc49.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DpIGtToL.js";import"./clsx-B-dksMZM.js";import"./Form-BSRHL6AU.js";import"./useFocusRing-CnXjVSj9.js";import"./index-_SptB5IF.js";import"./index-Cq0yuKyu.js";import"./Input-3zQjtKDY.js";import"./Hidden-Ci7T1bEi.js";import"./Button-BfXSwHW0.js";import"./useLabel-CZd2jY9k.js";import"./useLabels-CAk5ShxF.js";import"./useButton-Dc8urwoW.js";import"./FieldError-B-ZQXEeM.js";import"./Text-bLb0hYqG.js";import"./clsx-Ciqy0D92.js";import"./Text-ChJGU_Xm.js";import"./RSPContexts-CHkHxhdH.js";import"./Group-D6oafy4R.js";import"./useControlledState-x3Q8v9NC.js";import"./useLocalizedStringFormatter-fVU3OA8S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BbqiKWX0.js";import"./useField-DSKyBuUi.js";import"./TextField.module-DdivwlC8.js";import"./search-C_ugmLYG.js";import"./createLucideIcon-DG07A9xd.js";import"./x-BfnY6ZJn.js";import"./useLocalizedStringFormatter-CHt1E_Fl.js";import"./Button-WgLWfZml.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DhqoAnIr.js";import"./Collection-BGZfaZNZ.js";import"./index-FxwiPwmA.js";import"./DragAndDrop-CoEAXofO.js";import"./getScrollParent-TKe_y_ar.js";import"./scrollIntoView-AobHmSLH.js";import"./SelectionIndicator-C_ejA7zF.js";import"./SelectionManager-0Zrx2NaO.js";import"./useEvent-lwkuKQG3.js";import"./useDescription-BV7Lh5gS.js";import"./inertValue-AijH15Fn.js";import"./useHighlightSelectionDescription-C-kT9mXJ.js";import"./useUpdateEffect-CQPiULjW.js";import"./ListKeyboardDelegate-C47es2n9.js";import"./useHasTabbableChild-D9HOQgmM.js";import"./Checkbox-m73NCz3U.js";import"./check-C66u3zqq.js";import"./useToggleState-BivGYoU9.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
