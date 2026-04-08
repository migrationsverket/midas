import{r as m,f as l,j as t}from"./iframe-DeJZYfs6.js";import{S as d}from"./SearchField-C_FWNOqN.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B0CeCTme.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CVaTJ4pr.js";import"./clsx-B-dksMZM.js";import"./Form-C-IA29jh.js";import"./useFocusRing-EUZ5WM39.js";import"./index-DUC36L3p.js";import"./index-Dld1jC9-.js";import"./Input-7EHMCOwY.js";import"./Hidden-CpOEnTcU.js";import"./Button-TyrtoBf7.js";import"./useLabel-BTghzENV.js";import"./useLabels-DAGFp_YT.js";import"./useButton-B3BOjKYq.js";import"./FieldError-Bu4wLSzH.js";import"./Text-DiI9AjCa.js";import"./clsx-Ciqy0D92.js";import"./Text-BDvIHgKo.js";import"./RSPContexts-BW4hyt92.js";import"./Group-B-AmjHbU.js";import"./useControlledState-e4htfzmn.js";import"./useLocalizedStringFormatter-D8Vo3ZTR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CNvSGf-Y.js";import"./useField-DP3RVU73.js";import"./TextField.module-DdivwlC8.js";import"./search-JKSuR115.js";import"./createLucideIcon-BN41fbAL.js";import"./x-QMdCwQzi.js";import"./useLocalizedStringFormatter-Dswz4gW1.js";import"./Button-7AU2H28z.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C7trIB5i.js";import"./Collection-BPBdLDAU.js";import"./index-X7ll_aVF.js";import"./DragAndDrop-qTevrmCN.js";import"./getScrollParent-cyrVl-ro.js";import"./scrollIntoView-CmHT6ElZ.js";import"./SelectionIndicator-CfLsX9sj.js";import"./SelectionManager-C1t4FTfK.js";import"./useEvent-Prn2T694.js";import"./useDescription-DM4YbjnM.js";import"./inertValue-ThjtQrx5.js";import"./useHighlightSelectionDescription-CbaRau5z.js";import"./useUpdateEffect-BKlEp44w.js";import"./ListKeyboardDelegate-C4mFB7JL.js";import"./useHasTabbableChild-DoRI6q5Z.js";import"./Checkbox-BegcHKeZ.js";import"./check-DLQm5x4V.js";import"./useToggleState-BrFsELFk.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
