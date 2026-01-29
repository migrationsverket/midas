import{r as m,f as l,j as t}from"./iframe-TjYTyBIA.js";import{S as d}from"./SearchField-a1hCIdma.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DzlRtoJv.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DRcN3zts.js";import"./utils-B2jU_PXd.js";import"./useLocalizedStringFormatter-BthcVXxR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-5p42HyBq.js";import"./useFocusRing-2DlQQnAW.js";import"./index-BzxihWEi.js";import"./index-D9BjRmkk.js";import"./useFormValidation-CeJWDr9L.js";import"./useField-DJHv4sS4.js";import"./Button-DfGK-ytd.js";import"./Hidden-Bk8kC44C.js";import"./useLabels-BFnK5R4R.js";import"./useButton-EM8J5NvE.js";import"./search-gc1aJse7.js";import"./createLucideIcon-CEDLvmmT.js";import"./ClearButton-jUFSvUv_.js";import"./Button-Lepv9VS_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C3ettQfp.js";import"./VisuallyHidden-Bgu6hP_b.js";import"./x-BMgB1TfF.js";import"./FieldError-Bc9pveKo.js";import"./Text-BkOzDRnY.js";import"./Text-C9TF991Y.js";import"./RSPContexts-IGt6m-sM.js";import"./Collection-QZG0Os4g.js";import"./index-DnZT8snr.js";import"./DragAndDrop-DmA7TL7W.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C0rBB3SQ.js";import"./SelectionManager-DTo-Zj2V.js";import"./useEvent-onuK9vqA.js";import"./useDescription-Bc-rlWkY.js";import"./inertValue-C3jF3_uk.js";import"./useHighlightSelectionDescription-Co91bg-A.js";import"./useUpdateEffect-CdFC-PM4.js";import"./ListKeyboardDelegate-R82ob_wj.js";import"./useHasTabbableChild-CpegDWOA.js";import"./Checkbox-CH4woI9t.js";import"./Form-GSJN0Uyu.js";import"./check-CNyKNF5U.js";import"./useToggleState-Dd8bdgzc.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
