import{r as m,f as l,j as t}from"./iframe-eNlvCIQC.js";import{S as d}from"./SearchField-CqMLAm94.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DH1A0LIE.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DazIc8Hv.js";import"./clsx-B-dksMZM.js";import"./Form-Da29Si70.js";import"./useFocusRing-BmmlkTDk.js";import"./index-BZeDSjH7.js";import"./index-DngAPwAT.js";import"./Input-U924Lu33.js";import"./Hidden-BdbKhiKI.js";import"./Button-CefyB9za.js";import"./useLabel-B0k3Io0S.js";import"./useLabels-Dlb0vDOj.js";import"./useButton-DwspZCKK.js";import"./FieldError-D9ddsGCi.js";import"./Text-CCBMvhvi.js";import"./clsx-Ciqy0D92.js";import"./Text-DpGTS3fY.js";import"./RSPContexts-B8tIFTcn.js";import"./Group-tWso2G9U.js";import"./useControlledState-CSVjjcGV.js";import"./useLocalizedStringFormatter-B8bz883m.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bk4zHeKd.js";import"./useField-9uUI2YDc.js";import"./TextField.module-DdivwlC8.js";import"./search-1a3JnN14.js";import"./createLucideIcon-CwcksuKO.js";import"./x-DfVN5ZiU.js";import"./useLocalizedStringFormatter-CfUiywgS.js";import"./Button-CcMDkuHu.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C4bD4gli.js";import"./Collection-CMTcach8.js";import"./index-BV0sPe_Z.js";import"./DragAndDrop-DSwTd8KB.js";import"./getScrollParent-Bm_fO-Gz.js";import"./scrollIntoView-pjXXtg-k.js";import"./SelectionIndicator-DZbg7n9J.js";import"./SelectionManager-DLfWiJnu.js";import"./useEvent-HQfQnMMl.js";import"./useDescription-DnXOma0q.js";import"./inertValue-BSQmC1Jo.js";import"./useHighlightSelectionDescription-CiYssL7W.js";import"./useUpdateEffect-Bb2OxJda.js";import"./ListKeyboardDelegate-CmGfhmDQ.js";import"./useHasTabbableChild-CKow8Z09.js";import"./Checkbox-C-sOXork.js";import"./check-_IuHqsEa.js";import"./useToggleState-CJCWHnvO.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
