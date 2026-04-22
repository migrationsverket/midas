import{r as m,f as l,j as t}from"./iframe-9MdBivRm.js";import{S as d}from"./SearchField-Bil63gjw.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DZA-NDnW.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bn94QCjx.js";import"./clsx-B-dksMZM.js";import"./Form-Crvut_kx.js";import"./useFocusRing-r9TCofSe.js";import"./index-Cx-gCRg0.js";import"./index-CYPjKd3_.js";import"./Input-BRdi36Yt.js";import"./Hidden-mlaG9dyz.js";import"./Button-CB5roEUk.js";import"./useLabel-DJ2FRaty.js";import"./useLabels-BVQx-2qb.js";import"./useButton-9AsuX9J0.js";import"./FieldError-C2tntPOB.js";import"./Text-DqogYLWC.js";import"./clsx-Ciqy0D92.js";import"./Text-B_WlxrH5.js";import"./RSPContexts-yk-QUR19.js";import"./Group-DyeXIgcv.js";import"./useControlledState-DASGxOGH.js";import"./useLocalizedStringFormatter-BqBDGzJt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C6LMpBsJ.js";import"./useField-B-NHG1Dy.js";import"./TextField.module-DdivwlC8.js";import"./search-Bkk5cuKy.js";import"./createLucideIcon-w3wG1Pu8.js";import"./x-m6itTsWf.js";import"./useLocalizedStringFormatter-BF9QVzFe.js";import"./Button-oaXlsJtI.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B5GjKkS-.js";import"./Collection-DOip7Or5.js";import"./index-dnLCjEtw.js";import"./DragAndDrop-BPWAYmSo.js";import"./getScrollParent-B8busNPw.js";import"./scrollIntoView--qBAJMrU.js";import"./SelectionIndicator-BAejuz9T.js";import"./SelectionManager-BfxyxeUx.js";import"./useEvent-CzJ1Xvo0.js";import"./useDescription-u6RsoVs5.js";import"./inertValue-CQ9WNGVi.js";import"./useHighlightSelectionDescription-CFw_LKiK.js";import"./useUpdateEffect-D67O-OBM.js";import"./ListKeyboardDelegate-BTGk-Kg0.js";import"./useHasTabbableChild-CO2yoKK4.js";import"./Checkbox-DQ-BVXcV.js";import"./check-Cg0GVAjN.js";import"./useToggleState-Cd_5kGms.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
