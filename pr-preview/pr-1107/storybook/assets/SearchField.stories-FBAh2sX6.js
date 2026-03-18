import{r as m,f as l,j as t}from"./iframe-Cr04uqFn.js";import{S as d}from"./SearchField-AVH-9omg.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DwfZflbE.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DjFFz4B7.js";import"./utils-CsC3xkQx.js";import"./useLocalizedStringFormatter-CTazVPN1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BbiX9dI7.js";import"./useFocusRing-iGoUiyfg.js";import"./index-Ge0-Pyay.js";import"./index-BRmKR4IG.js";import"./useFormValidation-BQv-xQD8.js";import"./useField-DlJ3vYWQ.js";import"./Button-BDZhuw74.js";import"./Hidden-BqmZgZ8y.js";import"./useLabels-Jqxce70U.js";import"./useButton-DDahEz2i.js";import"./search-BBS6o70o.js";import"./createLucideIcon-DucUkfKy.js";import"./ClearButton-DDGK1Yd1.js";import"./x-BMsMY2q6.js";import"./Button-Bskr_9E8.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-afGT4_9p.js";import"./VisuallyHidden-Bkfpb86W.js";import"./FieldError-CM9YGji9.js";import"./Text-SaXXHVxE.js";import"./Text-CMC0Dinw.js";import"./RSPContexts-DKIHjjdb.js";import"./Collection-BcebPgQA.js";import"./index-C1CgnfUT.js";import"./DragAndDrop-CIpeZqZk.js";import"./getScrollParent-DB2xYs0i.js";import"./scrollIntoView-BS5aSLnj.js";import"./SelectionIndicator-DqEHErwo.js";import"./SelectionManager-CztMdh1x.js";import"./useEvent-B_zIZR1f.js";import"./useDescription-vtlKpR3S.js";import"./inertValue-BISuBmcI.js";import"./useHighlightSelectionDescription-CmT4841-.js";import"./useUpdateEffect-KfbDKUuF.js";import"./ListKeyboardDelegate-CSgnqlFj.js";import"./useHasTabbableChild-Dty13FcD.js";import"./Checkbox-BpTBzruk.js";import"./Form-B5xhmccI.js";import"./check-cbOX9A4K.js";import"./useToggleState-9nmEB_6B.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
