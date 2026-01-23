import{r as m,f as l,j as t}from"./iframe-BDAeyV_L.js";import{S as d}from"./SearchField-Bwk_lhLt.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Jfe5GPrY.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B4b2AaJr.js";import"./utils-QbpHp2iH.js";import"./useLocalizedStringFormatter-BWgc5TPM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BRJvIvPa.js";import"./useFocusRing-DZ9oxgDy.js";import"./index-bebXLijF.js";import"./index-BxXpe6Uv.js";import"./useFormValidation-DaMPzBFa.js";import"./useField-C7GoH2ks.js";import"./Button-hcT7fu5t.js";import"./Hidden-CWKhTNWg.js";import"./useLabels-CJ7PqtrQ.js";import"./useButton-yTtoFlYV.js";import"./search-CmItFoGK.js";import"./createLucideIcon-DrPkV-uJ.js";import"./ClearButton--Ltdsmg6.js";import"./Button-CzvpZwUk.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CEJ4AsDN.js";import"./VisuallyHidden-C7amzv03.js";import"./x-Bo3luZEL.js";import"./FieldError-nYxCLXng.js";import"./Text-CuLPV3Pn.js";import"./Text-CgZVKuAu.js";import"./RSPContexts-uVPcO6CS.js";import"./Collection-y60iSVfC.js";import"./index-It1jGq4A.js";import"./DragAndDrop-CKlhF5ZA.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D2sLS2N5.js";import"./SelectionManager-_BpQMH4s.js";import"./useEvent-DCC2o4ue.js";import"./useDescription-BsNFz1-d.js";import"./inertValue-DJKydUHj.js";import"./useHighlightSelectionDescription-C8wOl2Bm.js";import"./useUpdateEffect-DB22ihof.js";import"./ListKeyboardDelegate-DrX08Zf9.js";import"./useHasTabbableChild-CtE0_TNg.js";import"./Checkbox-CnHqE8jH.js";import"./Form-DfB0YOFw.js";import"./check-DQ3XE-pE.js";import"./useToggleState-C-1GHaBB.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
