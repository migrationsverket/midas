import{r as m,f as l,j as t}from"./iframe-BPfLM7Ck.js";import{S as d}from"./SearchField-BDmcNrKO.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CI_x7pt4.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CSi4b_Yv.js";import"./clsx-B-dksMZM.js";import"./Form-CrktwBOH.js";import"./useFocusRing-CsxpvGDo.js";import"./index-rhZ-B0wi.js";import"./index-CiQawPHP.js";import"./Input-2ckGPC8P.js";import"./Hidden-_AH0dQ5R.js";import"./Button-BCZt_uJ2.js";import"./useLabels-BKPQIAbg.js";import"./useButton-B_Q5X_Fs.js";import"./FieldError-DA7YJhow.js";import"./Text-EDTELklb.js";import"./clsx-Ciqy0D92.js";import"./Text-BuCe-OoK.js";import"./RSPContexts-D9Yw33px.js";import"./Group-Qss8jsPR.js";import"./useControlledState-Bu5kp2Ub.js";import"./useLocalizedStringFormatter-L6JiFowf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dw1W1uwx.js";import"./useField-C8qUntCT.js";import"./TextField.module-DdivwlC8.js";import"./search-DIT5F83j.js";import"./createLucideIcon-DawqXxM8.js";import"./x-B_Ef23XO.js";import"./useLocalizedStringFormatter-DYlaFC6-.js";import"./Button-DJ8_vDZW.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BbgyoPj6.js";import"./Collection-BQtUKtyD.js";import"./index-B2dVWoa8.js";import"./DragAndDrop-CmNBdu67.js";import"./getScrollParent-Ci5vFefB.js";import"./scrollIntoView-AZss3pZ2.js";import"./SelectionIndicator-C-SiOrEg.js";import"./SelectionManager-B2JOCuch.js";import"./useEvent-DxJgb46r.js";import"./useDescription-BfSwuuI8.js";import"./inertValue-CTbUtWji.js";import"./useHighlightSelectionDescription-Boz3ZTwp.js";import"./useUpdateEffect-CO3HBnkP.js";import"./ListKeyboardDelegate-QVPoGO6w.js";import"./useHasTabbableChild-DvQ2FEQ-.js";import"./Checkbox-Zh4JyBSa.js";import"./check-CfFA-K-u.js";import"./useToggleState-yS1wF-aE.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
