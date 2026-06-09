import{r as m,f as l,j as t}from"./iframe-DGitGBwd.js";import{S as d}from"./SearchField-DS6KJ3GC.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BxOGAGku.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DlxgMN-X.js";import"./clsx-B-dksMZM.js";import"./Form-D5bu5HNp.js";import"./useFocusRing-BSQFeV26.js";import"./index-CgyYAO-T.js";import"./index-C2aEhFku.js";import"./Input-CH8YKgUw.js";import"./Hidden-BTbvwN5u.js";import"./Button-CFc7ZkBU.js";import"./useLabel-DxdQgbMB.js";import"./useLabels-Obe7Lwct.js";import"./useButton-CJsEP6bk.js";import"./FieldError-BLFTeUPi.js";import"./Text-BBS_R9Lb.js";import"./clsx-Ciqy0D92.js";import"./Text-BHRP82y-.js";import"./RSPContexts-BNal8wWj.js";import"./Group-D-AHlaPK.js";import"./useControlledState-Dj3Q8cMg.js";import"./useLocalizedStringFormatter-IrjHOpw7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-IBB62wLm.js";import"./useField-dgIiq1Nz.js";import"./TextField.module-DdivwlC8.js";import"./search-DbFZ11h-.js";import"./createLucideIcon-CcqKhbRQ.js";import"./x-B5AWcWMp.js";import"./useLocalizedStringFormatter-CveS3y_K.js";import"./Button-CJ16F3mz.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BUTi2bAi.js";import"./Collection-DLiHOCN2.js";import"./index-CU63vF8i.js";import"./DragAndDrop-3B8OAHmx.js";import"./getScrollParent-BD_bpobV.js";import"./scrollIntoView-CQlM3xNO.js";import"./SelectionIndicator-Dqps-ADK.js";import"./SelectionManager-B9az4Zc6.js";import"./useEvent-DNR96Pag.js";import"./useDescription-DIrfQQU3.js";import"./inertValue-Dytzfxfp.js";import"./useHighlightSelectionDescription-DWw_TS8A.js";import"./useUpdateEffect-CqYhF1SR.js";import"./ListKeyboardDelegate-9t6rl9Vm.js";import"./useHasTabbableChild-BNUZpARZ.js";import"./Checkbox-DU9IcgWj.js";import"./check-BXM6CgTt.js";import"./useToggleState-q3BSSBJW.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
